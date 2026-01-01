import { PDFDocument, degrees } from 'pdf-lib';
import sharp from 'sharp';
import QRCode from 'qrcode';

interface ProcessResult {
  buffer?: Buffer;
  contentType?: string;
  filename?: string;
  url?: string;
  message?: string;
}

export async function processFile(
  category: string,
  action: string,
  files: File[]
): Promise<ProcessResult> {
  switch (category) {
    case 'pdf':
      return processPDF(action, files);
    case 'image':
      return processImage(action, files);
    case 'video':
      return processVideo(action, files);
    case 'document':
      return processDocument(action, files);
    case 'qrcode':
      return processQRCode(action, files);
    case 'utility':
      return processUtility(action, files);
    default:
      throw new Error(`Unsupported category: ${category}`);
  }
}

async function processPDF(action: string, files: File[]): Promise<ProcessResult> {
  const file = files[0];
  const arrayBuffer = await file.arrayBuffer();
  
  switch (action) {
    case 'merge': {
      const mergedPdf = await PDFDocument.create();
      
      for (const file of files) {
        const pdfBytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(pdfBytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }
      
      const pdfBytes = await mergedPdf.save();
      return {
        buffer: Buffer.from(pdfBytes),
        contentType: 'application/pdf',
        filename: 'merged.pdf',
      };
    }
    
    case 'split': {
      const pdf = await PDFDocument.load(arrayBuffer);
      const pageCount = pdf.getPageCount();
      
      // For demo, split into first page
      const splitPdf = await PDFDocument.create();
      const [firstPage] = await splitPdf.copyPages(pdf, [0]);
      splitPdf.addPage(firstPage);
      
      const pdfBytes = await splitPdf.save();
      return {
        buffer: Buffer.from(pdfBytes),
        contentType: 'application/pdf',
        filename: 'split-page-1.pdf',
      };
    }
    
    case 'compress': {
      const pdf = await PDFDocument.load(arrayBuffer);
      const pdfBytes = await pdf.save({ useObjectStreams: true });
      return {
        buffer: Buffer.from(pdfBytes),
        contentType: 'application/pdf',
        filename: 'compressed.pdf',
      };
    }
    
    case 'rotate': {
      const pdf = await PDFDocument.load(arrayBuffer);
      const pages = pdf.getPages();
      
      pages.forEach((page) => {
        const { angle } = page.getRotation();
        const newAngle = (angle + 90) % 360;
        page.setRotation(degrees(newAngle));
      });
      
      const pdfBytes = await pdf.save();
      return {
        buffer: Buffer.from(pdfBytes),
        contentType: 'application/pdf',
        filename: 'rotated.pdf',
      };
    }
    
    default:
      throw new Error(`Unsupported PDF action: ${action}`);
  }
}

async function processImage(action: string, files: File[]): Promise<ProcessResult> {
  const file = files[0];
  const buffer = Buffer.from(await file.arrayBuffer());
  
  switch (action) {
    case 'resize': {
      const resized = await sharp(buffer)
        .resize(800, 600, { fit: 'inside' })
        .toBuffer();
      
      return {
        buffer: resized,
        contentType: 'image/png',
        filename: 'resized.png',
      };
    }
    
    case 'compress': {
      const compressed = await sharp(buffer)
        .jpeg({ quality: 80 })
        .toBuffer();
      
      return {
        buffer: compressed,
        contentType: 'image/jpeg',
        filename: 'compressed.jpg',
      };
    }
    
    case 'convert': {
      const converted = await sharp(buffer)
        .png()
        .toBuffer();
      
      return {
        buffer: converted,
        contentType: 'image/png',
        filename: 'converted.png',
      };
    }
    
    case 'crop': {
      const cropped = await sharp(buffer)
        .extract({ left: 0, top: 0, width: 500, height: 500 })
        .toBuffer();
      
      return {
        buffer: cropped,
        contentType: 'image/png',
        filename: 'cropped.png',
      };
    }
    
    case 'rotate': {
      const rotated = await sharp(buffer)
        .rotate(90)
        .toBuffer();
      
      return {
        buffer: rotated,
        contentType: 'image/png',
        filename: 'rotated.png',
      };
    }
    
    case 'flip': {
      const flipped = await sharp(buffer)
        .flip()
        .toBuffer();
      
      return {
        buffer: flipped,
        contentType: 'image/png',
        filename: 'flipped.png',
      };
    }
    
    case 'grayscale': {
      const grayscale = await sharp(buffer)
        .grayscale()
        .toBuffer();
      
      return {
        buffer: grayscale,
        contentType: 'image/png',
        filename: 'grayscale.png',
      };
    }
    
    case 'blur': {
      const blurred = await sharp(buffer)
        .blur(5)
        .toBuffer();
      
      return {
        buffer: blurred,
        contentType: 'image/png',
        filename: 'blurred.png',
      };
    }
    
    case 'sharpen': {
      const sharpened = await sharp(buffer)
        .sharpen()
        .toBuffer();
      
      return {
        buffer: sharpened,
        contentType: 'image/png',
        filename: 'sharpened.png',
      };
    }
    
    case 'thumbnail': {
      const thumbnail = await sharp(buffer)
        .resize(200, 200, { fit: 'cover' })
        .toBuffer();
      
      return {
        buffer: thumbnail,
        contentType: 'image/png',
        filename: 'thumbnail.png',
      };
    }
    
    case 'metadata': {
      const metadata = await sharp(buffer).metadata();
      return {
        buffer: Buffer.from(JSON.stringify(metadata, null, 2)),
        contentType: 'application/json',
        filename: 'metadata.json',
      };
    }
    
    default:
      throw new Error(`Unsupported image action: ${action}`);
  }
}

async function processVideo(action: string, files: File[]): Promise<ProcessResult> {
  // Video processing would require ffmpeg setup
  // For now, return a placeholder
  throw new Error('Video processing requires ffmpeg configuration. Feature coming soon!');
}

async function processDocument(action: string, files: File[]): Promise<ProcessResult> {
  // Document processing with docx library
  throw new Error('Document processing feature coming soon!');
}

async function processQRCode(action: string, files: File[]): Promise<ProcessResult> {
  switch (action) {
    case 'generate': {
      const file = files[0];
      const text = await file.text();
      
      const qrBuffer = await QRCode.toBuffer(text, {
        errorCorrectionLevel: 'H',
        type: 'png',
        width: 500,
        margin: 2,
      });
      
      return {
        buffer: qrBuffer,
        contentType: 'image/png',
        filename: 'qrcode.png',
      };
    }
    
    case 'custom': {
      const file = files[0];
      const text = await file.text();
      
      const qrBuffer = await QRCode.toBuffer(text, {
        errorCorrectionLevel: 'H',
        type: 'png',
        width: 500,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });
      
      return {
        buffer: qrBuffer,
        contentType: 'image/png',
        filename: 'custom-qrcode.png',
      };
    }
    
    default:
      throw new Error(`Unsupported QR code action: ${action}`);
  }
}

async function processUtility(action: string, files: File[]): Promise<ProcessResult> {
  const file = files[0];
  const buffer = Buffer.from(await file.arrayBuffer());
  
  switch (action) {
    case 'hash': {
      const crypto = await import('crypto');
      const hash = crypto.createHash('sha256').update(buffer).digest('hex');
      return {
        buffer: Buffer.from(hash),
        contentType: 'text/plain',
        filename: 'hash.txt',
      };
    }
    
    case 'base64-encode': {
      const base64 = buffer.toString('base64');
      return {
        buffer: Buffer.from(base64),
        contentType: 'text/plain',
        filename: 'base64.txt',
      };
    }
    
    case 'file-info': {
      const info = {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: new Date(file.lastModified).toISOString(),
      };
      return {
        buffer: Buffer.from(JSON.stringify(info, null, 2)),
        contentType: 'application/json',
        filename: 'file-info.json',
      };
    }
    
    case 'json-format': {
      const text = await file.text();
      const json = JSON.parse(text);
      const formatted = JSON.stringify(json, null, 2);
      return {
        buffer: Buffer.from(formatted),
        contentType: 'application/json',
        filename: 'formatted.json',
      };
    }
    
    default:
      throw new Error(`Unsupported utility action: ${action}`);
  }
}
