'use client';

import { useState } from 'react';
import { ToolConfig } from '@/tools.config';
import { ToolPageTopBanner, ToolPageSidebar, ToolPageBottomBanner } from '@/components/AdSlot';

interface ToolPageTemplateProps {
  tool: ToolConfig;
}

export default function ToolPageTemplate({ tool }: ToolPageTemplateProps) {
  const [files, setFiles] = useState<FileList | null>(null);
  const [url, setUrl] = useState<string>('');
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{ url: string; filename: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
    setResult(null);
    setError(null);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setResult(null);
    setError(null);
  };

  const handleProcess = async () => {
    // Validate input based on tool type
    if (tool.acceptsUrl) {
      if (!url || url.trim() === '') {
        setError('Please enter a valid URL');
        return;
      }
    } else {
      if (!files || files.length === 0) {
        setError('Please select at least one file');
        return;
      }
    }

    setProcessing(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      
      if (tool.acceptsUrl) {
        // For URL-based tools, send URL as text file
        const urlBlob = new Blob([url], { type: 'text/plain' });
        formData.append('file0', urlBlob, 'url.txt');
      } else {
        // For file-based tools, send files
        Array.from(files!).forEach((file, index) => {
          formData.append(`file${index}`, file);
        });
      }
      
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
        const downloadUrl = window.URL.createObjectURL(blob);
        
        // Parse Content-Disposition header safely
        const contentDisposition = response.headers.get('content-disposition');
        let filename = `output${tool.outputType}`;
        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
          if (filenameMatch && filenameMatch[1]) {
            filename = filenameMatch[1].replace(/['"]/g, '');
          }
        }
        
        setResult({ url: downloadUrl, filename });
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 sm:py-8 md:py-12 px-3 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{tool.icon}</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{tool.name}</h1>
              <p className="text-base sm:text-lg text-gray-600 px-4">{tool.description}</p>
              <p className="text-xs sm:text-sm text-indigo-600 mt-2 px-4">
                ❤️ 100% Free Tool - Support us by whitelisting ads
              </p>
            </div>

            {/* Top Banner Ad */}
            <ToolPageTopBanner />

            {/* Main Card */}
            <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
              {/* Disclaimer for social media tools */}
              {tool.requiresDisclaimer && (
                <div className="mb-6 p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-xs sm:text-sm text-yellow-800">
                    <span className="font-semibold">⚠️ Disclaimer:</span> Only download content you have rights to use. Respect copyright laws and platform terms of service.
                  </p>
                </div>
              )}

              {/* Input Section */}
              <div className="mb-6 sm:mb-8">
                {tool.acceptsUrl ? (
                  <>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">🔗 Enter URL</h2>
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={url}
                        onChange={handleUrlChange}
                        placeholder={tool.urlPlaceholder || 'Enter URL here...'}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-gray-900"
                      />
                      {url && (
                        <div className="text-xs sm:text-sm text-gray-600">
                          <p className="font-medium">URL entered:</p>
                          <p className="truncate">{url}</p>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">📤 Upload Files</h2>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center hover:border-indigo-500 transition-colors">
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
                        className="cursor-pointer inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                      >
                        Choose {tool.inputTypes.includes('*') ? 'File(s)' : tool.inputTypes.join(', ')}
                      </label>
                      {files && files.length > 0 && (
                        <div className="mt-4 text-xs sm:text-sm text-gray-600">
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
                  </>
                )}
              </div>

              {/* Process Button */}
              <div className="mb-6 sm:mb-8">
                <button
                  onClick={handleProcess}
                  disabled={processing || (tool.acceptsUrl ? !url : !files || files.length === 0)}
                  className="w-full py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95"
                >
                  {processing ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    `⚡ ${tool.acceptsUrl ? 'Download' : 'Process with ' + tool.name}`
                  )}
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm sm:text-base text-red-800">
                    <span className="font-semibold">Error:</span> {error}
                  </p>
                </div>
              )}

              {/* Download Section */}
              {result && (
                <div className="p-4 sm:p-6 bg-green-50 border border-green-200 rounded-lg">
                  <h2 className="text-xl sm:text-2xl font-semibold text-green-800 mb-3 sm:mb-4">✅ Success!</h2>
                  <p className="text-sm sm:text-base text-green-700 mb-3 sm:mb-4">Your file has been processed successfully.</p>
                  <button
                    onClick={handleDownload}
                    className="w-full py-2 sm:py-3 px-4 sm:px-6 text-base sm:text-lg font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors"
                  >
                    📥 Download {result.filename}
                  </button>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">ℹ️ Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Category:</span>
                  <span className="ml-2 text-gray-600 capitalize">{tool.category}</span>
                </div>
                {!tool.acceptsUrl && (
                  <div>
                    <span className="font-semibold text-gray-700">Supported Formats:</span>
                    <span className="ml-2 text-gray-600">{tool.inputTypes.join(', ')}</span>
                  </div>
                )}
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

            {/* Bottom Banner Ad */}
            <ToolPageBottomBanner />
          </div>

          {/* Sidebar Ad (Desktop only) */}
          <div className="lg:w-80">
            <div className="sticky top-4">
              <ToolPageSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
