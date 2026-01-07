import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { toolsConfig, getToolById } from '@/tools.config';
import ToolPageTemplate from '@/components/ToolPageTemplate';
import CitationToolTemplate from '@/components/CitationToolTemplate';
import LaTeXVisualizer from '@/components/LaTeXVisualizer';

export async function generateStaticParams() {
  return toolsConfig.map((tool) => ({
    slug: tool.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = getToolById(params.slug);
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} - ShobHobe`,
    description: tool.description,
  };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolById(params.slug);

  if (!tool) {
    notFound();
  }

  // Use specialized template for citation generator
  if (tool.id === 'citation-generator') {
    return <CitationToolTemplate tool={tool} />;
  }

  // Use specialized template for LaTeX visualizer
  if (tool.id === 'latex-visualizer') {
    return <LaTeXVisualizer tool={tool} />;
  }

  return <ToolPageTemplate tool={tool} />;
}
