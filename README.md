# Docs to Markdown Converter

A web application to convert PDF or Word documents into Markdown format for easy integration into various Markdown-supported platforms. Built with a React frontend and FastAPI backend for seamless and efficient document conversion.

## Tech Stack

### Frontend

- **React**: Provides a dynamic and responsive UI.
- **Axios**: Handles API requests to the backend.

### Backend

- **FastAPI**: Manages document processing and conversion logic.
- **Python Libraries**: Utilizes `python-docx` or `pypandoc` (or equivalent) for document parsing.

## Setup and Installation

1. **Clone the Repository**

   ```bash
    https://github.com/Sadmin23/Doc-to-Markdown.git
    cd Doc-to-Markdown
   ```

2. **Backend Setup**

   - Install dependencies (requires Python 3.8+):
     ```bash
     cd backend
     pip install -r requirements.txt
     ```
   - Run the FastAPI server:
     ```bash
     uvicorn main:app --reload
     ```

3. **Frontend Setup**

   - Navigate to the frontend directory and install dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Start the React development server:
     ```bash
     npm run dev
     ```

## Usage

1. Open the app in your browser at `http://localhost:5173`.
2. Upload a Google Docs or Word file.
3. Click "Convert" to process the document.
4. View and copy the Markdown output.

## API Endpoints

- **POST** `/convert`: Accepts a document file and returns converted Markdown content.

  - **Request Body**: `file` (the document to be converted)
  - **Response**: `markdown` (converted Markdown string)
