'use client';

import { useState } from 'react';
import { ToolConfig } from '@/tools.config';
import { ToolPageTopBanner, ToolPageSidebar, ToolPageBottomBanner } from '@/components/AdSlot';

interface CitationToolTemplateProps {
  tool: ToolConfig;
}

export default function CitationToolTemplate({ tool }: CitationToolTemplateProps) {
  const [url, setUrl] = useState<string>('');
  const [citationStyle, setCitationStyle] = useState<string>('APA');
  const [sourceType, setSourceType] = useState<string>('website');
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{ citation: string; downloadUrl?: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setResult(null);
    setError(null);
    setCopied(false);
  };

  const handleProcess = async () => {
    if (!url || url.trim() === '') {
      setError('Please enter a valid URL or DOI');
      return;
    }

    setProcessing(true);
    setError(null);
    setResult(null);
    setCopied(false);

    try {
      const formData = new FormData();
      
      // Create a JSON payload with URL, citation style, and source type
      const payload = {
        url: url.trim(),
        citationType: citationStyle,
        sourceType: sourceType
      };
      
      const urlBlob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      formData.append('file0', urlBlob, 'citation-data.json');
      formData.append('action', tool.action);

      const response = await fetch(`/api/tools/${tool.category}/${tool.action}`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Citation generation failed');
      }

      // Check if response is a file download or JSON
      const contentType = response.headers.get('content-type');
      if (contentType?.includes('application/json')) {
        const data = await response.json();
        setResult({ citation: data.citation || JSON.stringify(data) });
      } else {
        // Handle file download - create download URL and also extract text
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        
        // Try to extract citation text from PDF (if possible)
        // For now, just provide download option
        setResult({ 
          citation: 'Citation generated successfully. Download PDF below or copy from the preview.',
          downloadUrl 
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setProcessing(false);
    }
  };

  const handleCopy = () => {
    if (result?.citation) {
      navigator.clipboard.writeText(result.citation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (result?.downloadUrl) {
      const a = document.createElement('a');
      a.href = result.downloadUrl;
      a.download = `citation-${citationStyle.toLowerCase()}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{tool.icon}</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{tool.name}</h1>
              <p className="text-lg text-gray-600">{tool.description}</p>
              <p className="text-sm text-indigo-600 mt-2">
                ❤️ 100% Free Tool - Support us by whitelisting ads
              </p>
            </div>

            {/* Top Banner Ad */}
            <ToolPageTopBanner />

            {/* Main Card */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              {/* URL Input Section */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔗 Enter URL or DOI</h2>
                <input
                  type="text"
                  value={url}
                  onChange={handleUrlChange}
                  placeholder={tool.urlPlaceholder || 'Enter article URL or DOI...'}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-gray-900"
                />
                {url && (
                  <div className="mt-2 text-sm text-gray-600">
                    <p className="truncate">📄 {url}</p>
                  </div>
                )}
              </div>

              {/* Citation Style Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">📖 Citation Style</h3>
                <div className="grid grid-cols-3 gap-3">
                  {['APA', 'MLA', 'Chicago', 'IEEE', 'Springer', 'ACM'].map((style) => (
                    <button
                      key={style}
                      onClick={() => setCitationStyle(style)}
                      className={`py-3 px-4 rounded-lg font-medium transition-all ${
                        citationStyle === style
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Source Type Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">📚 Source Type</h3>
                <select
                  value={sourceType}
                  onChange={(e) => setSourceType(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-gray-900"
                >
                  <option value="website">Website/Online Article</option>
                  <option value="journal">Journal Article</option>
                  <option value="book">Book</option>
                  <option value="newspaper">Newspaper Article</option>
                  <option value="magazine">Magazine Article</option>
                  <option value="blog">Blog Post</option>
                </select>
              </div>

              {/* Generate Button */}
              <div className="mb-8">
                <button
                  onClick={handleProcess}
                  disabled={processing || !url}
                  className="w-full py-4 px-6 text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95"
                >
                  {processing ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating Citation...
                    </span>
                  ) : (
                    `⚡ Generate ${citationStyle} Citation`
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

              {/* Result Section */}
              {result && (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                  <h2 className="text-2xl font-semibold text-green-800 mb-4">✅ Citation Generated!</h2>
                  
                  {/* Citation Preview */}
                  <div className="mb-4 p-4 bg-white rounded-lg border border-gray-200">
                    <p className="text-sm font-mono text-gray-700 whitespace-pre-wrap break-words">
                      {result.citation}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={handleCopy}
                      className="flex-1 py-3 px-6 text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      {copied ? (
                        <>
                          ✓ Copied!
                        </>
                      ) : (
                        <>
                          📋 Copy Citation
                        </>
                      )}
                    </button>
                    
                    {result.downloadUrl && (
                      <button
                        onClick={handleDownload}
                        className="flex-1 py-3 px-6 text-lg font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                      >
                        📥 Download PDF
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ℹ️ How to Use</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Paste the URL of the article, webpage, or enter a DOI</li>
                <li>• Select your preferred citation style (APA, MLA, or Chicago)</li>
                <li>• Choose the type of source you&apos;re citing</li>
                <li>• Click generate to create your citation</li>
                <li>• Copy the citation to your clipboard or download as PDF</li>
              </ul>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> The tool will attempt to fetch metadata automatically. For best results, use direct article URLs or DOIs when available.
                </p>
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
