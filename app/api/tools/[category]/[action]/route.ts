import { NextRequest, NextResponse } from 'next/server';
import { processFile } from '@/services/fileProcessor';

export async function POST(
  request: NextRequest,
  { params }: { params: { category: string; action: string } }
) {
  try {
    const formData = await request.formData();
    const files: File[] = [];
    
    // Extract all files from formData
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('file') && value instanceof File) {
        files.push(value);
      }
    }

    if (files.length === 0) {
      return NextResponse.json(
        { error: 'No files provided' },
        { status: 400 }
      );
    }

    const { category, action } = params;

    // Process the files using the service layer
    const result = await processFile(category, action, files);

    // If result is a buffer (file data), send it as a download
    if (result.buffer) {
      // Convert Buffer to Uint8Array for NextResponse
      const uint8Array = new Uint8Array(result.buffer);
      return new NextResponse(uint8Array, {
        headers: {
          'Content-Type': result.contentType || 'application/octet-stream',
          'Content-Disposition': `attachment; filename="${result.filename}"`,
        },
      });
    }

    // Otherwise, send JSON response
    return NextResponse.json(result);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Processing failed' },
      { status: 500 }
    );
  }
}
