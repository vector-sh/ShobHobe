import Link from 'next/link';
import { getAllCategories, getToolsByCategory } from '@/tools.config';
import { HomepageBannerAd } from '@/components/AdSlot';

export default function Home() {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            🚀 ShobHobe
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-indigo-100">
            Your Universal File Processing Toolkit
          </p>
          <p className="text-base sm:text-lg text-indigo-200 max-w-3xl mx-auto px-4">
            115+ powerful tools for PDF, images, videos, documents, QR codes, research, and more.
            All processing happens securely. Fast, simple, and 100% free!
          </p>
          <p className="text-xs sm:text-sm text-indigo-300 mt-3 sm:mt-4 px-4">
            ❤️ Support us by whitelisting ads - it keeps all tools free forever!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories Grid */}
        {categories.map((category, categoryIndex) => {
          const tools = getToolsByCategory(category.id);
          return (
            <div key={category.id}>
              <div className="mb-12">
                {/* Category Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-3xl sm:text-4xl">{category.icon}</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                      {category.name}
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 ml-11 sm:ml-16">
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
              
              {/* Insert ad after every 3 categories */}
              {(categoryIndex + 1) % 3 === 0 && categoryIndex !== categories.length - 1 && (
                <HomepageBannerAd />
              )}
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
          <p className="text-gray-400 mb-2">
            Built with Next.js 14, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-gray-500">
            ❤️ All tools are 100% free - Please support us by whitelisting ads
          </p>
        </div>
      </footer>
    </div>
  );
}
