'use client';

import { useState } from 'react';
import { ToolConfig } from '@/tools.config';

interface ToolPageTemplateProps {
  tool: ToolConfig;
}

export default function ToolPageTemplate({ tool }: ToolPageTemplateProps) {
  const [files, setFiles] = useState<FileList | null>(null);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{ url: string; filename: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
    setResult(null);
    setError(null);
  };

  const handleProcess = async () => {
    if (!files || files.length === 0) {
      setError('Please select at least one file');
      return;
    }

    setProcessing(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      Array.from(files).forEach((file, index) => {
        formData.append(`file${index}`, file);
      });
      formData.append('action', tool.action);

      const response = await fetch(`/api/tools/${tool.category}/${tool.action}`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Processing failed');
      }

      // Check if response is a file download
      const contentType = response.headers.get('content-type');
      if (contentType?.includes('application/json')) {
        const data = await response.json();
        setResult(data);
      } else {
        // Handle file download
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const filename = response.headers.get('content-disposition')?.split('filename=')[1]?.replace(/"/g, '') || `output${tool.outputType}`;
        setResult({ url, filename });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (result?.url) {
      const a = document.createElement('a');
      a.href = result.url;
      a.download = result.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{tool.icon}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{tool.name}</h1>
          <p className="text-lg text-gray-600">{tool.description}</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Upload Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📤 Upload Files</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors">
              <input
                type="file"
                onChange={handleFileChange}
                multiple={tool.action.includes('merge') || tool.action.includes('batch')}
                accept={tool.inputTypes.join(',')}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Choose {tool.inputTypes.includes('*') ? 'File(s)' : tool.inputTypes.join(', ')}
              </label>
              {files && files.length > 0 && (
                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-medium">Selected files:</p>
                  <ul className="mt-2 space-y-1">
                    {Array.from(files).map((file, index) => (
                      <li key={index} className="truncate">
                        {file.name} ({(file.size / 1024).toFixed(2)} KB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Process Button */}
          <div className="mb-8">
            <button
              onClick={handleProcess}
              disabled={processing || !files || files.length === 0}
              className="w-full py-4 px-6 text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95"
            >
              {processing ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                `⚡ Process with ${tool.name}`
              )}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">
                <span className="font-semibold">Error:</span> {error}
              </p>
            </div>
          )}

          {/* Download Section */}
          {result && (
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">✅ Success!</h2>
              <p className="text-green-700 mb-4">Your file has been processed successfully.</p>
              <button
                onClick={handleDownload}
                className="w-full py-3 px-6 text-lg font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                📥 Download {result.filename}
              </button>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">ℹ️ Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-gray-700">Category:</span>
              <span className="ml-2 text-gray-600 capitalize">{tool.category}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Supported Formats:</span>
              <span className="ml-2 text-gray-600">{tool.inputTypes.join(', ')}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Output Format:</span>
              <span className="ml-2 text-gray-600">{tool.outputType}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Processing:</span>
              <span className="ml-2 text-gray-600">Client-side secure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
