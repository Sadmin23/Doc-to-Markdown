// App.js
import React, { useState } from 'react';
import { FileUploader } from './components/FileUploader';
import { MarkdownPreview } from './components/MarkdownPreview';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">PDF to Markdown Converter</h1>
        <div className="max-w-2xl mx-auto">
          <FileUploader
            setMarkdown={setMarkdown}
            setIsLoading={setIsLoading}
            setError={setError}
          />
          {error && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
          {isLoading && (
            <div className="mt-4 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600"></div>
            </div>
          )}
          {markdown && <MarkdownPreview markdown={markdown} />}
        </div>
      </div>
    </div>
  );
}

export default App;