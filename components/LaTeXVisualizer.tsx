'use client';

import { useState } from 'react';
import { ToolConfig } from '@/tools.config';
import { ToolPageTopBanner, ToolPageSidebar, ToolPageBottomBanner } from '@/components/AdSlot';

interface LaTeXVisualizerProps {
  tool: ToolConfig;
}

export default function LaTeXVisualizer({ tool }: LaTeXVisualizerProps) {
  const [latexCode, setLatexCode] = useState<string>('E = mc^2');
  const [renderedImage, setRenderedImage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleLatexChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLatexCode(e.target.value);
    setError(null);
  };

  const handleRender = async () => {
    if (!latexCode || latexCode.trim() === '') {
      setError('Please enter LaTeX code');
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // Use a public LaTeX rendering service (CodeCogs or similar)
      const encodedLatex = encodeURIComponent(latexCode);
      const imageUrl = `https://latex.codecogs.com/png.latex?\\dpi{150}\\bg_white ${encodedLatex}`;
      
      // Test if image loads
      const img = new Image();
      img.onload = () => {
        setRenderedImage(imageUrl);
        setProcessing(false);
      };
      img.onerror = () => {
        setError('Failed to render LaTeX. Please check your syntax.');
        setProcessing(false);
      };
      img.src = imageUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setProcessing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(latexCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (renderedImage) {
      const link = document.createElement('a');
      link.href = renderedImage;
      link.download = 'latex-equation.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const insertSymbol = (symbol: string) => {
    setLatexCode(prev => prev + symbol);
  };

  const quickExamples = [
    { name: 'Fraction', code: '\\frac{a}{b}' },
    { name: 'Square Root', code: '\\sqrt{x}' },
    { name: 'Power', code: 'x^{2}' },
    { name: 'Subscript', code: 'x_{i}' },
    { name: 'Sum', code: '\\sum_{i=1}^{n} x_i' },
    { name: 'Integral', code: '\\int_{0}^{\\infty} e^{-x} dx' },
    { name: 'Limit', code: '\\lim_{x \\to \\infty} f(x)' },
    { name: 'Matrix', code: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}' },
  ];

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
              {/* LaTeX Input Section */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">∑ Enter LaTeX Code</h2>
                <textarea
                  value={latexCode}
                  onChange={handleLatexChange}
                  placeholder="Enter LaTeX code here... e.g., E = mc^2"
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-gray-900 font-mono"
                />
              </div>

              {/* Quick Insert Buttons */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">⚡ Quick Examples</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {quickExamples.map((example) => (
                    <button
                      key={example.name}
                      onClick={() => setLatexCode(example.code)}
                      className="py-2 px-3 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
                    >
                      {example.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Common Symbols */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">📐 Common Symbols</h3>
                <div className="flex flex-wrap gap-2">
                  {['\\alpha', '\\beta', '\\gamma', '\\delta', '\\pi', '\\theta', '\\lambda', '\\mu', '\\sigma', '\\omega', '\\infty', '\\pm', '\\times', '\\div', '\\neq', '\\leq', '\\geq'].map((sym) => (
                    <button
                      key={sym}
                      onClick={() => insertSymbol(sym + ' ')}
                      className="py-2 px-3 text-sm bg-blue-50 hover:bg-blue-100 rounded-lg transition-all font-mono"
                    >
                      {sym}
                    </button>
                  ))}
                </div>
              </div>

              {/* Render Button */}
              <div className="mb-6">
                <button
                  onClick={handleRender}
                  disabled={processing || !latexCode}
                  className="w-full py-4 px-6 text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95"
                >
                  {processing ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Rendering...
                    </span>
                  ) : (
                    '🎨 Render Equation'
                  )}
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    <span className="font-semibold">Error:</span> {error}
                  </p>
                </div>
              )}

              {/* Rendered Output */}
              {renderedImage && (
                <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">✅ Rendered Equation</h2>
                  
                  {/* Image Preview */}
                  <div className="mb-4 p-6 bg-white rounded-lg flex items-center justify-center min-h-[150px]">
                    <img src={renderedImage} alt="Rendered LaTeX" className="max-w-full" />
                  </div>

                  {/* LaTeX Code Display */}
                  <div className="mb-4 p-4 bg-gray-100 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 mb-2">LaTeX Code:</p>
                    <code className="text-sm font-mono text-gray-800 break-all">{latexCode}</code>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={handleCopy}
                      className="flex-1 py-3 px-6 text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      {copied ? '✓ Copied!' : '📋 Copy LaTeX Code'}
                    </button>
                    
                    <button
                      onClick={handleDownload}
                      className="flex-1 py-3 px-6 text-lg font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      📥 Download PNG
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ℹ️ How to Use</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Enter LaTeX math code in the text area (e.g., E = mc^2)</li>
                <li>• Use quick examples to get started with common expressions</li>
                <li>• Insert common symbols using the symbol buttons</li>
                <li>• Click &quot;Render Equation&quot; to visualize your LaTeX</li>
                <li>• Copy the LaTeX code to clipboard or download the rendered image</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> LaTeX uses backslash for commands. Common patterns: \\frac&#123;a&#125;&#123;b&#125; for fractions, \\sqrt&#123;x&#125; for roots, x^&#123;2&#125; for powers, x_&#123;i&#125; for subscripts.
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
