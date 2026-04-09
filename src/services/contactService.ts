// Contact Service - Handles both localStorage and API calls
export interface ContactSubmission {
  id: string;
  submittedAt: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

class ContactService {
  private readonly STORAGE_KEY = 'contactSubmissions';
  private readonly API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:3001/api';
  private useLocalStorage: boolean = !import.meta.env.VITE_REACT_APP_API_URL; // Use localStorage if no API URL is set

  // Toggle between localStorage and API
  setUseLocalStorage(use: boolean) {
    this.useLocalStorage = use;
  }

  // Get all submissions
  async getSubmissions(): Promise<ContactSubmission[]> {
    if (this.useLocalStorage) {
      return this.getFromLocalStorage();
    } else {
      return this.getFromAPI();
    }
  }

  // Add new submission
  async addSubmission(submission: Omit<ContactSubmission, 'id' | 'submittedAt'>): Promise<ContactSubmission> {
    const newSubmission: ContactSubmission = {
      ...submission,
      id: Date.now().toString(),
      submittedAt: new Date().toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    };

    if (this.useLocalStorage) {
      return this.addToLocalStorage(newSubmission);
    } else {
      return this.addToAPI(newSubmission);
    }
  }

  // Delete submission by ID
  async deleteSubmission(id: string): Promise<boolean> {
    if (this.useLocalStorage) {
      return this.deleteFromLocalStorage(id);
    } else {
      return this.deleteFromAPI(id);
    }
  }

  // === LOCAL STORAGE METHODS ===
  private getFromLocalStorage(): ContactSubmission[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading submissions from localStorage:', error);
      return [];
    }
  }

  private addToLocalStorage(submission: ContactSubmission): ContactSubmission {
    try {
      const submissions = this.getFromLocalStorage();
      const updated = [submission, ...submissions];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
      return submission;
    } catch (error) {
      console.error('Error saving submission to localStorage:', error);
      throw error;
    }
  }

  private deleteFromLocalStorage(id: string): boolean {
    try {
      const submissions = this.getFromLocalStorage();
      const updated = submissions.filter(s => s.id !== id);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
      return true;
    } catch (error) {
      console.error('Error deleting submission from localStorage:', error);
      return false;
    }
  }

  // === API METHODS ===
  private async getFromAPI(): Promise<ContactSubmission[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/contact-submissions`);
      const result: ApiResponse<ContactSubmission[]> = await response.json();
      
      if (!result.success || !result.data) {
        throw new Error(result.message || 'Failed to fetch submissions');
      }
      
      return result.data;
    } catch (error) {
      console.error('Error fetching submissions from API:', error);
      // Fallback to localStorage if API fails
      console.log('Falling back to localStorage due to API error');
      this.useLocalStorage = true;
      return this.getFromLocalStorage();
    }
  }

  private async addToAPI(submission: ContactSubmission): Promise<ContactSubmission> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/contact-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission),
      });
      
      const result: ApiResponse<ContactSubmission> = await response.json();
      
      if (!result.success || !result.data) {
        throw new Error(result.message || 'Failed to save submission');
      }
      
      return result.data;
    } catch (error) {
      console.error('Error saving submission to API:', error);
      // Fallback to localStorage if API fails
      console.log('Falling back to localStorage due to API error');
      this.useLocalStorage = true;
      return this.addToLocalStorage(submission);
    }
  }

  private async deleteFromAPI(id: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/contact-submissions/${id}`, {
        method: 'DELETE',
      });
      
      const result: ApiResponse<void> = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to delete submission');
      }
      
      return true;
    } catch (error) {
      console.error('Error deleting submission from API:', error);
      // Fallback to localStorage if API fails
      console.log('Falling back to localStorage due to API error');
      this.useLocalStorage = true;
      return this.deleteFromLocalStorage(id);
    }
  }

  // Utility method to check API connection
  async checkApiConnection(): Promise<boolean> {
    if (this.useLocalStorage) return false;
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      const response = await fetch(`${this.API_BASE_URL}/health`, {
        method: 'GET',
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      return response.ok;
    } catch (error) {
      console.log('API connection check failed, using localStorage');
      this.useLocalStorage = true;
      return false;
    }
  }
}

export const contactService = new ContactService();
