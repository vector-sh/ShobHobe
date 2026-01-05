'use client';

import { useEffect } from 'react';

interface AdSlotProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  adStyle?: React.CSSProperties;
  className?: string;
}

export default function AdSlot({ 
  adSlot, 
  adFormat = 'auto',
  adStyle = { display: 'block' },
  className = ''
}: AdSlotProps) {
  useEffect(() => {
    try {
      // Push ad to AdSense
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense publisher ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Specialized Ad Components for different positions
export function HomepageBannerAd() {
  return (
    <div className="my-8">
      <div className="text-xs text-gray-500 text-center mb-2">Advertisement</div>
      <AdSlot 
        adSlot="1234567890" // Replace with actual ad slot ID
        adFormat="horizontal"
        adStyle={{ display: 'block', minHeight: '90px' }}
        className="max-w-7xl mx-auto"
      />
    </div>
  );
}

export function ToolPageTopBanner() {
  return (
    <div className="mb-6">
      <div className="text-xs text-gray-500 text-center mb-2">Advertisement</div>
      <AdSlot 
        adSlot="2345678901" // Replace with actual ad slot ID
        adFormat="horizontal"
        adStyle={{ display: 'block', minHeight: '90px' }}
      />
    </div>
  );
}

export function ToolPageSidebar() {
  return (
    <div className="hidden lg:block">
      <div className="text-xs text-gray-500 text-center mb-2">Advertisement</div>
      <AdSlot 
        adSlot="3456789012" // Replace with actual ad slot ID
        adFormat="vertical"
        adStyle={{ display: 'block', minWidth: '160px', minHeight: '600px' }}
      />
    </div>
  );
}

export function ToolPageBottomBanner() {
  return (
    <div className="mt-8">
      <div className="text-xs text-gray-500 text-center mb-2">Advertisement</div>
      <AdSlot 
        adSlot="4567890123" // Replace with actual ad slot ID
        adFormat="horizontal"
        adStyle={{ display: 'block', minHeight: '90px' }}
      />
    </div>
  );
}
