# Contact Form API Documentation

This document outlines the required backend API endpoints for the Skyview Homes contact form system.

## Base URL
```
http://localhost:3001/api
```
(Configure via `REACT_APP_API_URL` environment variable)

## Endpoints

### 1. Get All Contact Submissions
```http
GET /api/contact-submissions
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1649123456789",
      "submittedAt": "04/07/2026, 02:30 PM",
      "fullName": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "subject": "Property Inquiry",
      "message": "I'm interested in the 2BHK apartment"
    }
  ]
}
```

### 2. Create New Contact Submission
```http
POST /api/contact-submissions
```

**Request Body:**
```json
{
  "id": "1649123456789",
  "submittedAt": "04/07/2026, 02:30 PM",
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "Property Inquiry",
  "message": "I'm interested in the 2BHK apartment"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "1649123456789",
    "submittedAt": "04/07/2026, 02:30 PM",
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "subject": "Property Inquiry",
    "message": "I'm interested in the 2BHK apartment"
  },
  "message": "Submission created successfully"
}
```

### 3. Delete Contact Submission
```http
DELETE /api/contact-submissions/{id}
```

**Response:**
```json
{
  "success": true,
  "message": "Submission deleted successfully"
}
```

### 4. Health Check (Optional)
```http
GET /api/health
```

**Response:**
```json
{
  "success": true,
  "message": "API is running"
}
```

## Data Model

### ContactSubmission
```typescript
interface ContactSubmission {
  id: string;           // Unique identifier (timestamp string)
  submittedAt: string;  // Formatted date/time (MM/DD/YYYY, HH:MM AM/PM)
  fullName: string;     // User's full name
  email: string;        // User's email address
  phone: string;        // User's phone number
  subject: string;      // Subject of the inquiry
  message: string;      // Detailed message
}
```

## Error Responses

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error description"
}
```

## Environment Variables

Create a `.env` file in your React project root:

```env
# For Local Development (uses localStorage)
# REACT_APP_API_URL=

# For Backend API (uncomment and set your API URL)
# REACT_APP_API_URL=http://localhost:3001/api
```

## Implementation Notes

1. **Automatic Fallback**: If API calls fail, the system automatically falls back to localStorage
2. **Real-time Updates**: Both localStorage and API provide real-time data updates
3. **Error Handling**: Comprehensive error handling with graceful degradation
4. **Data Persistence**: localStorage ensures data persistence even when API is unavailable

## Backend Setup Example (Node.js + Express)

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock storage (replace with database)
let submissions = [];

// GET all submissions
app.get('/api/contact-submissions', (req, res) => {
  res.json({
    success: true,
    data: submissions
  });
});

// POST new submission
app.post('/api/contact-submissions', (req, res) => {
  const submission = req.body;
  submissions.push(submission);
  res.json({
    success: true,
    data: submission,
    message: 'Submission created successfully'
  });
});

// DELETE submission
app.delete('/api/contact-submissions/:id', (req, res) => {
  const { id } = req.params;
  submissions = submissions.filter(s => s.id !== id);
  res.json({
    success: true,
    message: 'Submission deleted successfully'
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running'
  });
});

app.listen(3001, () => {
  console.log('API server running on port 3001');
});
```

## Frontend Integration

The frontend automatically switches between localStorage and API based on the `REACT_APP_API_URL` environment variable:

- **No API URL set**: Uses localStorage
- **API URL set**: Uses API with localStorage fallback

To enable API mode, simply set the environment variable and restart the development server.
