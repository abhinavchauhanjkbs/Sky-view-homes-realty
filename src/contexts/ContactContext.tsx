import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { contactService, ContactSubmission } from '@/services/contactService';

interface ContactContextType {
  submissions: ContactSubmission[];
  addSubmission: (submission: Omit<ContactSubmission, 'id' | 'submittedAt'>) => void;
  getSubmissions: () => ContactSubmission[];
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};

interface ContactProviderProps {
  children: ReactNode;
}

export const ContactProvider: React.FC<ContactProviderProps> = ({ children }) => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  // Load submissions on component mount
  useEffect(() => {
    const loadSubmissions = async () => {
      try {
        const data = await contactService.getSubmissions();
        setSubmissions(data);
      } catch (error) {
        console.error('Error loading submissions:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSubmissions();
  }, []);

  const addSubmission = (submission: Omit<ContactSubmission, 'id' | 'submittedAt'>) => {
    console.log('Adding submission:', submission);
    
    // Handle async operation without making the function async
    contactService.addSubmission(submission)
      .then(newSubmission => {
        console.log('New submission created:', newSubmission);
        setSubmissions(prev => {
          console.log('Previous submissions:', prev);
          const updated = [newSubmission, ...prev];
          console.log('Updated submissions:', updated);
          return updated;
        });
      })
      .catch(error => {
        console.error('Error adding submission:', error);
        // Could add error state handling here if needed
      });
  };

  const getSubmissions = () => submissions;

  return (
    <ContactContext.Provider value={{ submissions, addSubmission, getSubmissions }}>
      {children}
    </ContactContext.Provider>
  );
};
