import Link from 'next/link';
import { getAllCategories, getToolsByCategory } from '@/tools.config';

export default function Home() {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            🚀 ShobHobe
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-indigo-100">
            Your Universal File Processing Toolkit
          </p>
          <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
            60+ powerful tools for PDF, images, videos, documents, QR codes, and more.
            All processing happens securely on our servers. Fast, simple, and free!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories Grid */}
        {categories.map((category) => {
          const tools = getToolsByCategory(category.id);
          return (
            <div key={category.id} className="mb-12">
              {/* Category Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {category.name}
                  </h2>
                </div>
                <p className="text-gray-600 text-lg ml-16">
                  {category.description}
                </p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {tools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.id}`}
                    className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-indigo-300 transform hover:-translate-y-1"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{tool.icon}</div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {tool.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-2">
            <span className="font-bold">ShobHobe</span> - Universal Tool Platform
          </p>
          <p className="text-gray-400">
            Built with Next.js 14, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
