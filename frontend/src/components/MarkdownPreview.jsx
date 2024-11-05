import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export function MarkdownPreview({ markdown }) {
  const [copyStatus, setCopyStatus] = useState('Copy Markdown');

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown).then(() => {
      setCopyStatus('Copied!');
      setTimeout(() => {
        setCopyStatus('Copy Markdown');
      }, 1000);
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Converted Markdown</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="prose max-w-none">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
      <button
        onClick={handleCopy}
        className="mt-4 px-4 py-2 w-40 text-center bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {copyStatus}
      </button>
    </div>
  );
}