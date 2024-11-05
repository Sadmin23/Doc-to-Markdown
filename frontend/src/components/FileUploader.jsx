// components/FileUploader.js
import React from 'react';

export function FileUploader({ setMarkdown, setIsLoading, setError }) {
  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('pdf')) {
      setError('Please upload a PDF file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/convert', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Conversion failed');
      }

      const data = await response.json();

      console.log(data);
      

      setMarkdown(data.markdown);
    } catch (err) {
      setError('Failed to convert PDF. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <label className="block w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-blue-500">
        <span className="text-gray-600">Drop your PDF here or click to upload</span>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>
    </div>
  );
}