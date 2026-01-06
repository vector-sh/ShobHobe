export interface ToolConfig {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  inputTypes: string[];
  outputType: string;
  action: string;
  phase?: number;
  status?: 'active' | 'coming-soon' | 'beta';
  maxFileSize?: number;
  requiresDisclaimer?: boolean;
  seoKeywords?: string[];
  acceptsUrl?: boolean; // Flag to indicate this tool accepts URL input instead of file upload
  urlPlaceholder?: string; // Placeholder text for URL input
}

export const toolsConfig: ToolConfig[] = [
  // PDF Tools (10 tools)
  {
    id: "pdf-merge",
    name: "Merge PDFs",
    description: "Combine multiple PDF files into a single document",
    category: "pdf",
    icon: "📄",
    inputTypes: [".pdf"],
    outputType: ".pdf",
    action: "merge"
  },
  {
    id: "pdf-split",
    name: "Split PDF",
    description: "Split a PDF into separate pages or ranges",
    category: "pdf",
    icon: "✂️",
    inputTypes: [".pdf"],
    outputType: ".pdf",
    action: "split"
  },
  {
    id: "pdf-compress",
    name: "Compress PDF",
    description: "Reduce PDF file size while maintaining quality",
    category: "pdf",
    icon: "🗜️",
    inputTypes: [".pdf"],
    outputType: ".pdf",
    action: "compress"
  },
  {
    id: "pdf-to-images",
    name: "PDF to Images",
    description: "Convert PDF pages to image files",
    category: "pdf",
    icon: "🖼️",
    inputTypes: [".pdf"],
    outputType: ".png",
    action: "to-images"
  },
  {
    id: "pdf-rotate",
    name: "Rotate PDF",
    description: "Rotate PDF pages by 90, 180, or 270 degrees",
    category: "pdf",
    icon: "🔄",
    inputTypes: [".pdf"],
    outputType: ".pdf",
    action: "rotate"
  },
  {
    id: "pdf-watermark",
    name: "Add Watermark",
    description: "Add text or image watermark to PDF",
    category: "pdf",
    icon: "💧",
    inputTypes: [".pdf"],
    outputType: ".pdf",
    action: "watermark"
  },
  {
    id: "pdf-protect",
    name: "Protect PDF",
    description: "Add password protection to PDF files",
    category: "pdf",
    icon: "🔒",
    inputTypes: [".pdf"],
    outputType: ".pdf",
    action: "protect"
  },
  {
    id: "pdf-unlock",
    name: "Unlock PDF",
    description: "Remove password protection from PDF files",
    category: "pdf",
    icon: "🔓",
    inputTypes: [".pdf"],
    outputType: ".pdf",
    action: "unlock"
  },
  {
    id: "pdf-extract-text",
    name: "Extract Text",
    description: "Extract text content from PDF files",
    category: "pdf",
    icon: "📝",
    inputTypes: [".pdf"],
    outputType: ".txt",
    action: "extract-text"
  },
  {
    id: "pdf-extract-images",
    name: "Extract Images",
    description: "Extract all images from PDF files",
    category: "pdf",
    icon: "🎨",
    inputTypes: [".pdf"],
    outputType: ".zip",
    action: "extract-images"
  },
  {
    id: "pdf-to-word",
    name: "PDF to Word",
    description: "Convert PDF to DOCX format",
    category: "pdf",
    icon: "📝",
    inputTypes: [".pdf"],
    outputType: ".docx",
    action: "to-word",
    phase: 1,
    status: "active",
    maxFileSize: 50,
    seoKeywords: ["pdf to word", "pdf to docx", "convert pdf"]
  },
  {
    id: "word-to-pdf",
    name: "Word to PDF",
    description: "Convert DOCX to PDF format",
    category: "document",
    icon: "📄",
    inputTypes: [".docx", ".doc"],
    outputType: ".pdf",
    action: "word-to-pdf",
    phase: 1,
    status: "active",
    maxFileSize: 50,
    seoKeywords: ["word to pdf", "docx to pdf", "convert docx"]
  },
  {
    id: "pdf-to-ppt",
    name: "PDF to PPT",
    description: "Convert PDF to PowerPoint format",
    category: "pdf",
    icon: "📊",
    inputTypes: [".pdf"],
    outputType: ".pptx",
    action: "to-ppt",
    phase: 1,
    status: "beta",
    maxFileSize: 50,
    seoKeywords: ["pdf to ppt", "pdf to powerpoint", "convert pdf"]
  },

  // Image Tools (15 tools)
  {
    id: "image-resize",
    name: "Resize Image",
    description: "Resize images to specific dimensions",
    category: "image",
    icon: "📐",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".png",
    action: "resize"
  },
  {
    id: "image-compress",
    name: "Compress Image",
    description: "Reduce image file size",
    category: "image",
    icon: "🗜️",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".jpg",
    action: "compress"
  },
  {
    id: "image-convert",
    name: "Convert Format",
    description: "Convert images between different formats",
    category: "image",
    icon: "🔄",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
    outputType: ".png",
    action: "convert"
  },
  {
    id: "image-crop",
    name: "Crop Image",
    description: "Crop images to specific dimensions",
    category: "image",
    icon: "✂️",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".png",
    action: "crop"
  },
  {
    id: "image-rotate",
    name: "Rotate Image",
    description: "Rotate images by any angle",
    category: "image",
    icon: "🔄",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".png",
    action: "rotate"
  },
  {
    id: "image-flip",
    name: "Flip Image",
    description: "Flip images horizontally or vertically",
    category: "image",
    icon: "↔️",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".png",
    action: "flip"
  },
  {
    id: "image-filter",
    name: "Apply Filters",
    description: "Apply various filters to images",
    category: "image",
    icon: "🎨",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".png",
    action: "filter"
  },
  {
    id: "image-blur",
    name: "Blur Image",
    description: "Apply blur effect to images",
    category: "image",
    icon: "🌫️",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".png",
    action: "blur"
  },
  {
    id: "image-sharpen",
    name: "Sharpen Image",
    description: "Enhance image sharpness",
    category: "image",
    icon: "✨",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".png",
    action: "sharpen"
  },
  {
    id: "image-grayscale",
    name: "Grayscale",
    description: "Convert images to grayscale",
    category: "image",
    icon: "⚫",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".png",
    action: "grayscale"
  },
  {
    id: "image-thumbnail",
    name: "Create Thumbnail",
    description: "Generate thumbnails from images",
    category: "image",
    icon: "🖼️",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".png",
    action: "thumbnail"
  },
  {
    id: "image-watermark",
    name: "Add Watermark",
    description: "Add watermark to images",
    category: "image",
    icon: "💧",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".png",
    action: "watermark"
  },
  {
    id: "image-border",
    name: "Add Border",
    description: "Add border to images",
    category: "image",
    icon: "🖼️",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".png",
    action: "border"
  },
  {
    id: "image-remove-bg",
    name: "Remove Background",
    description: "Remove background from images",
    category: "image",
    icon: "🎭",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".png",
    action: "remove-bg"
  },
  {
    id: "image-metadata",
    name: "View Metadata",
    description: "View and edit image metadata",
    category: "image",
    icon: "ℹ️",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".json",
    action: "metadata"
  },

  // Video Tools (10 tools)
  {
    id: "video-compress",
    name: "Compress Video",
    description: "Reduce video file size",
    category: "video",
    icon: "🗜️",
    inputTypes: [".mp4", ".avi", ".mov", ".webm"],
    outputType: ".mp4",
    action: "compress"
  },
  {
    id: "video-convert",
    name: "Convert Format",
    description: "Convert videos between formats",
    category: "video",
    icon: "🔄",
    inputTypes: [".mp4", ".avi", ".mov", ".webm", ".mkv"],
    outputType: ".mp4",
    action: "convert"
  },
  {
    id: "video-trim",
    name: "Trim Video",
    description: "Cut and trim video clips",
    category: "video",
    icon: "✂️",
    inputTypes: [".mp4", ".avi", ".mov", ".webm"],
    outputType: ".mp4",
    action: "trim"
  },
  {
    id: "video-merge",
    name: "Merge Videos",
    description: "Combine multiple videos into one",
    category: "video",
    icon: "➕",
    inputTypes: [".mp4", ".avi", ".mov", ".webm"],
    outputType: ".mp4",
    action: "merge"
  },
  {
    id: "video-thumbnail",
    name: "Extract Thumbnail",
    description: "Extract thumbnail from video",
    category: "video",
    icon: "🖼️",
    inputTypes: [".mp4", ".avi", ".mov", ".webm"],
    outputType: ".png",
    action: "thumbnail"
  },
  {
    id: "video-to-gif",
    name: "Video to GIF",
    description: "Convert video to animated GIF",
    category: "video",
    icon: "🎞️",
    inputTypes: [".mp4", ".avi", ".mov", ".webm"],
    outputType: ".gif",
    action: "to-gif"
  },
  {
    id: "video-audio-extract",
    name: "Extract Audio",
    description: "Extract audio from video files",
    category: "video",
    icon: "🎵",
    inputTypes: [".mp4", ".avi", ".mov", ".webm"],
    outputType: ".mp3",
    action: "extract-audio"
  },
  {
    id: "video-rotate",
    name: "Rotate Video",
    description: "Rotate video by 90, 180, or 270 degrees",
    category: "video",
    icon: "🔄",
    inputTypes: [".mp4", ".avi", ".mov", ".webm"],
    outputType: ".mp4",
    action: "rotate"
  },
  {
    id: "video-watermark",
    name: "Add Watermark",
    description: "Add watermark to videos",
    category: "video",
    icon: "💧",
    inputTypes: [".mp4", ".avi", ".mov", ".webm"],
    outputType: ".mp4",
    action: "watermark"
  },
  {
    id: "video-subtitle",
    name: "Add Subtitles",
    description: "Add subtitles to videos",
    category: "video",
    icon: "💬",
    inputTypes: [".mp4", ".avi", ".mov", ".webm"],
    outputType: ".mp4",
    action: "subtitle"
  },
  {
    id: "video-to-mp3",
    name: "Video to MP3",
    description: "Extract audio from video as MP3",
    category: "video",
    icon: "🎵",
    inputTypes: [".mp4", ".avi", ".mov", ".webm", ".mkv"],
    outputType: ".mp3",
    action: "to-mp3",
    phase: 1,
    status: "active",
    maxFileSize: 100,
    seoKeywords: ["video to mp3", "extract audio", "convert video to audio"]
  },
  {
    id: "video-to-mp4",
    name: "Video to MP4",
    description: "Convert video to MP4 format",
    category: "video",
    icon: "🎬",
    inputTypes: [".avi", ".mov", ".webm", ".mkv", ".flv"],
    outputType: ".mp4",
    action: "to-mp4",
    phase: 1,
    status: "active",
    maxFileSize: 200,
    seoKeywords: ["video to mp4", "convert video", "mp4 converter"]
  },
  {
    id: "audio-merge",
    name: "Audio Merge",
    description: "Combine multiple audio files into one",
    category: "audio",
    icon: "🔊",
    inputTypes: [".mp3", ".wav", ".m4a", ".aac"],
    outputType: ".mp3",
    action: "merge",
    phase: 1,
    status: "active",
    maxFileSize: 50,
    seoKeywords: ["merge audio", "combine audio", "join audio files"]
  },

  // Document Tools (10 tools)
  {
    id: "doc-to-pdf",
    name: "DOCX to PDF",
    description: "Convert Word documents to PDF",
    category: "document",
    icon: "📄",
    inputTypes: [".docx", ".doc"],
    outputType: ".pdf",
    action: "to-pdf"
  },
  {
    id: "doc-merge",
    name: "Merge Documents",
    description: "Combine multiple Word documents",
    category: "document",
    icon: "➕",
    inputTypes: [".docx"],
    outputType: ".docx",
    action: "merge"
  },
  {
    id: "doc-split",
    name: "Split Document",
    description: "Split Word document by sections or pages",
    category: "document",
    icon: "✂️",
    inputTypes: [".docx"],
    outputType: ".docx",
    action: "split"
  },
  {
    id: "doc-extract-text",
    name: "Extract Text",
    description: "Extract text from Word documents",
    category: "document",
    icon: "📝",
    inputTypes: [".docx", ".doc"],
    outputType: ".txt",
    action: "extract-text"
  },
  {
    id: "doc-extract-images",
    name: "Extract Images",
    description: "Extract images from Word documents",
    category: "document",
    icon: "🖼️",
    inputTypes: [".docx"],
    outputType: ".zip",
    action: "extract-images"
  },
  {
    id: "doc-word-count",
    name: "Word Count",
    description: "Count words and characters in documents",
    category: "document",
    icon: "🔢",
    inputTypes: [".docx", ".doc", ".txt"],
    outputType: ".json",
    action: "word-count"
  },
  {
    id: "doc-convert-txt",
    name: "Convert to Text",
    description: "Convert documents to plain text",
    category: "document",
    icon: "📝",
    inputTypes: [".docx", ".doc"],
    outputType: ".txt",
    action: "to-txt"
  },
  {
    id: "doc-watermark",
    name: "Add Watermark",
    description: "Add watermark to Word documents",
    category: "document",
    icon: "💧",
    inputTypes: [".docx"],
    outputType: ".docx",
    action: "watermark"
  },
  {
    id: "doc-compare",
    name: "Compare Documents",
    description: "Compare two documents for differences",
    category: "document",
    icon: "🔍",
    inputTypes: [".docx", ".txt"],
    outputType: ".html",
    action: "compare"
  },
  {
    id: "doc-template",
    name: "Fill Template",
    description: "Fill document templates with data",
    category: "document",
    icon: "📋",
    inputTypes: [".docx"],
    outputType: ".docx",
    action: "template"
  },

  // QR Code Tools (5 tools)
  {
    id: "qr-generate",
    name: "Generate QR Code",
    description: "Create QR codes from text or URLs",
    category: "qrcode",
    icon: "📱",
    inputTypes: [".txt"],
    outputType: ".png",
    action: "generate"
  },
  {
    id: "qr-decode",
    name: "Decode QR Code",
    description: "Read and decode QR codes from images",
    category: "qrcode",
    icon: "🔍",
    inputTypes: [".png", ".jpg", ".jpeg"],
    outputType: ".txt",
    action: "decode"
  },
  {
    id: "qr-batch",
    name: "Batch Generate QR",
    description: "Generate multiple QR codes at once",
    category: "qrcode",
    icon: "📊",
    inputTypes: [".csv", ".json"],
    outputType: ".zip",
    action: "batch"
  },
  {
    id: "qr-custom",
    name: "Custom QR Code",
    description: "Create QR codes with custom colors and logos",
    category: "qrcode",
    icon: "🎨",
    inputTypes: [".txt"],
    outputType: ".png",
    action: "custom"
  },
  {
    id: "qr-vcard",
    name: "vCard QR Code",
    description: "Generate QR codes for contact information",
    category: "qrcode",
    icon: "👤",
    inputTypes: [".json"],
    outputType: ".png",
    action: "vcard"
  },

  // Utility Tools (10 tools)
  {
    id: "util-compress-zip",
    name: "Create ZIP",
    description: "Compress files into ZIP archive",
    category: "utility",
    icon: "🗜️",
    inputTypes: ["*"],
    outputType: ".zip",
    action: "compress-zip"
  },
  {
    id: "util-extract-zip",
    name: "Extract ZIP",
    description: "Extract files from ZIP archive",
    category: "utility",
    icon: "📦",
    inputTypes: [".zip"],
    outputType: "*",
    action: "extract-zip"
  },
  {
    id: "util-hash",
    name: "Calculate Hash",
    description: "Calculate MD5, SHA256, or other hashes",
    category: "utility",
    icon: "#️⃣",
    inputTypes: ["*"],
    outputType: ".txt",
    action: "hash"
  },
  {
    id: "util-base64-encode",
    name: "Base64 Encode",
    description: "Encode files to Base64",
    category: "utility",
    icon: "🔐",
    inputTypes: ["*"],
    outputType: ".txt",
    action: "base64-encode"
  },
  {
    id: "util-base64-decode",
    name: "Base64 Decode",
    description: "Decode Base64 to files",
    category: "utility",
    icon: "🔓",
    inputTypes: [".txt"],
    outputType: "*",
    action: "base64-decode"
  },
  {
    id: "util-file-info",
    name: "File Information",
    description: "Get detailed file information",
    category: "utility",
    icon: "ℹ️",
    inputTypes: ["*"],
    outputType: ".json",
    action: "file-info"
  },
  {
    id: "util-rename-batch",
    name: "Batch Rename",
    description: "Rename multiple files at once",
    category: "utility",
    icon: "✏️",
    inputTypes: ["*"],
    outputType: ".zip",
    action: "rename-batch"
  },
  {
    id: "util-json-format",
    name: "Format JSON",
    description: "Format and validate JSON files",
    category: "utility",
    icon: "{ }",
    inputTypes: [".json"],
    outputType: ".json",
    action: "json-format"
  },
  {
    id: "util-csv-json",
    name: "CSV to JSON",
    description: "Convert CSV to JSON format",
    category: "utility",
    icon: "🔄",
    inputTypes: [".csv"],
    outputType: ".json",
    action: "csv-to-json"
  },
  {
    id: "util-json-csv",
    name: "JSON to CSV",
    description: "Convert JSON to CSV format",
    category: "utility",
    icon: "🔄",
    inputTypes: [".json"],
    outputType: ".csv",
    action: "json-to-csv"
  },

  // Phase 2: Social Media Tools (5 tools)
  {
    id: "tiktok-download",
    name: "TikTok Downloader",
    description: "Download public TikTok videos",
    category: "social",
    icon: "🎵",
    inputTypes: [],
    outputType: ".mp4",
    action: "download",
    phase: 2,
    status: "active",
    maxFileSize: 1,
    requiresDisclaimer: true,
    seoKeywords: ["tiktok downloader", "download tiktok video", "tiktok video saver"],
    acceptsUrl: true,
    urlPlaceholder: "https://www.tiktok.com/@username/video/1234567890"
  },
  {
    id: "instagram-download",
    name: "Instagram Downloader",
    description: "Download public Instagram media",
    category: "social",
    icon: "📷",
    inputTypes: [],
    outputType: ".mp4",
    action: "download",
    phase: 2,
    status: "active",
    maxFileSize: 1,
    requiresDisclaimer: true,
    seoKeywords: ["instagram downloader", "download instagram", "ig video download"],
    acceptsUrl: true,
    urlPlaceholder: "https://www.instagram.com/p/ABC123/"
  },
  {
    id: "facebook-download",
    name: "Facebook Downloader",
    description: "Download public Facebook videos",
    category: "social",
    icon: "📘",
    inputTypes: [],
    outputType: ".mp4",
    action: "download",
    phase: 2,
    status: "active",
    maxFileSize: 1,
    requiresDisclaimer: true,
    seoKeywords: ["facebook downloader", "download facebook video", "fb video saver"],
    acceptsUrl: true,
    urlPlaceholder: "https://www.facebook.com/watch/?v=1234567890"
  },
  {
    id: "twitter-download",
    name: "Twitter Downloader",
    description: "Download Twitter/X media",
    category: "social",
    icon: "🐦",
    inputTypes: [],
    outputType: ".mp4",
    action: "download",
    phase: 2,
    status: "active",
    maxFileSize: 1,
    requiresDisclaimer: true,
    seoKeywords: ["twitter downloader", "download twitter video", "x video download"],
    acceptsUrl: true,
    urlPlaceholder: "https://twitter.com/username/status/1234567890"
  },
  {
    id: "pinterest-download",
    name: "Pinterest Downloader",
    description: "Download Pinterest images",
    category: "social",
    icon: "📌",
    inputTypes: [],
    outputType: ".jpg",
    action: "download",
    phase: 2,
    status: "active",
    maxFileSize: 1,
    requiresDisclaimer: true,
    seoKeywords: ["pinterest downloader", "download pinterest image", "pinterest saver"],
    acceptsUrl: true,
    urlPlaceholder: "https://www.pinterest.com/pin/1234567890/"
  },

  // Phase 2: Document Generators (10 tools)
  {
    id: "cv-generator",
    name: "CV Generator",
    description: "Create professional resume",
    category: "generator",
    icon: "📝",
    inputTypes: [".json"],
    outputType: ".pdf",
    action: "generate-cv",
    phase: 2,
    status: "active",
    maxFileSize: 5,
    seoKeywords: ["cv generator", "resume maker", "create cv"]
  },
  {
    id: "invoice-generator",
    name: "Invoice Generator",
    description: "Generate invoices with templates",
    category: "generator",
    icon: "🧾",
    inputTypes: [".json"],
    outputType: ".pdf",
    action: "generate-invoice",
    phase: 2,
    status: "active",
    maxFileSize: 5,
    seoKeywords: ["invoice generator", "create invoice", "invoice maker"]
  },
  {
    id: "cover-letter-generator",
    name: "Cover Letter Generator",
    description: "Create cover letters",
    category: "generator",
    icon: "✉️",
    inputTypes: [".json"],
    outputType: ".pdf",
    action: "generate-cover-letter",
    phase: 2,
    status: "active",
    maxFileSize: 5,
    seoKeywords: ["cover letter generator", "create cover letter", "letter maker"]
  },
  {
    id: "receipt-generator",
    name: "Receipt Generator",
    description: "Generate receipts",
    category: "generator",
    icon: "🧾",
    inputTypes: [".json"],
    outputType: ".pdf",
    action: "generate-receipt",
    phase: 2,
    status: "active",
    maxFileSize: 5,
    seoKeywords: ["receipt generator", "create receipt", "receipt maker"]
  },
  {
    id: "certificate-generator",
    name: "Certificate Generator",
    description: "Create certificates",
    category: "generator",
    icon: "🏆",
    inputTypes: [".json"],
    outputType: ".pdf",
    action: "generate-certificate",
    phase: 2,
    status: "active",
    maxFileSize: 5,
    seoKeywords: ["certificate generator", "create certificate", "certificate maker"]
  },
  {
    id: "business-card-generator",
    name: "Business Card Generator",
    description: "Design business cards",
    category: "generator",
    icon: "💼",
    inputTypes: [".json"],
    outputType: ".png",
    action: "generate-business-card",
    phase: 2,
    status: "active",
    maxFileSize: 5,
    seoKeywords: ["business card generator", "create business card", "card designer"]
  },
  {
    id: "letterhead-generator",
    name: "Letterhead Generator",
    description: "Create company letterheads",
    category: "generator",
    icon: "📄",
    inputTypes: [".json"],
    outputType: ".pdf",
    action: "generate-letterhead",
    phase: 2,
    status: "active",
    maxFileSize: 5,
    seoKeywords: ["letterhead generator", "create letterhead", "company letterhead"]
  },
  {
    id: "notes-to-pdf",
    name: "Notes to PDF",
    description: "Convert text notes to PDF",
    category: "generator",
    icon: "📝",
    inputTypes: [".txt"],
    outputType: ".pdf",
    action: "notes-to-pdf",
    phase: 2,
    status: "active",
    maxFileSize: 10,
    seoKeywords: ["notes to pdf", "text to pdf", "convert notes"]
  },
  {
    id: "study-guide-generator",
    name: "Study Guide Generator",
    description: "Create formatted study materials",
    category: "generator",
    icon: "📚",
    inputTypes: [".txt", ".json"],
    outputType: ".pdf",
    action: "generate-study-guide",
    phase: 2,
    status: "active",
    maxFileSize: 10,
    seoKeywords: ["study guide generator", "create study guide", "study material maker"]
  },
  {
    id: "add-page-numbers",
    name: "Add Page Numbers",
    description: "Add page numbers to existing PDF",
    category: "generator",
    icon: "🔢",
    inputTypes: [".pdf"],
    outputType: ".pdf",
    action: "add-page-numbers",
    phase: 2,
    status: "active",
    maxFileSize: 50,
    seoKeywords: ["add page numbers", "pdf page numbers", "number pdf pages"]
  },

  // Phase 3: Productivity Tools (Useful tools only)
  {
    id: "barcode-generator",
    name: "Barcode Generator",
    description: "Generate various barcodes",
    category: "productivity",
    icon: "📊",
    inputTypes: [".txt"],
    outputType: ".png",
    action: "generate-barcode",
    phase: 3,
    status: "active",
    maxFileSize: 1,
    seoKeywords: ["barcode generator", "create barcode", "generate barcode"]
  },
  {
    id: "url-shortener",
    name: "URL Shortener",
    description: "Shorten long URLs",
    category: "productivity",
    icon: "🔗",
    inputTypes: [".txt"],
    outputType: ".txt",
    action: "shorten-url",
    phase: 3,
    status: "active",
    maxFileSize: 1,
    seoKeywords: ["url shortener", "shorten url", "short link"]
  },
  {
    id: "password-generator",
    name: "Password Generator",
    description: "Generate secure passwords",
    category: "productivity",
    icon: "🔐",
    inputTypes: [],
    outputType: ".txt",
    action: "generate-password",
    phase: 3,
    status: "active",
    maxFileSize: 1,
    seoKeywords: ["password generator", "secure password", "random password"]
  },
  {
    id: "password-checker",
    name: "Password Strength Checker",
    description: "Validate password strength",
    category: "productivity",
    icon: "🔒",
    inputTypes: [".txt"],
    outputType: ".json",
    action: "check-password",
    phase: 3,
    status: "active",
    maxFileSize: 1,
    seoKeywords: ["password checker", "password strength", "validate password"]
  },
  {
    id: "color-palette",
    name: "Color Palette Generator",
    description: "Generate color schemes",
    category: "productivity",
    icon: "🎨",
    inputTypes: [".jpg", ".jpeg", ".png"],
    outputType: ".json",
    action: "generate-palette",
    phase: 3,
    status: "active",
    maxFileSize: 10,
    seoKeywords: ["color palette", "color scheme", "extract colors"]
  },
  {
    id: "calendar-generator",
    name: "Calendar Generator",
    description: "Generate printable calendars",
    category: "productivity",
    icon: "📅",
    inputTypes: [".json"],
    outputType: ".pdf",
    action: "generate-calendar",
    phase: 3,
    status: "active",
    maxFileSize: 5,
    seoKeywords: ["calendar generator", "printable calendar", "create calendar"]
  },
  {
    id: "qr-generator",
    name: "QR Code Generator",
    description: "Generate QR codes from text/URLs",
    category: "productivity",
    icon: "📱",
    inputTypes: [".txt"],
    outputType: ".png",
    action: "generate-qr",
    phase: 3,
    status: "active",
    maxFileSize: 1,
    seoKeywords: ["qr code generator", "generate qr", "create qr code"]
  },

  // Phase 3: File Utilities (5 tools)
  {
    id: "batch-rename",
    name: "Batch File Rename",
    description: "Rename multiple files at once",
    category: "file-utility",
    icon: "✏️",
    inputTypes: [".zip"],
    outputType: ".zip",
    action: "batch-rename",
    phase: 3,
    status: "active",
    maxFileSize: 100,
    seoKeywords: ["batch rename", "rename files", "bulk rename"]
  },
  {
    id: "zip-creator",
    name: "ZIP Creator",
    description: "Create ZIP archives",
    category: "file-utility",
    icon: "🗜️",
    inputTypes: [".*"],
    outputType: ".zip",
    action: "create-zip",
    phase: 3,
    status: "active",
    maxFileSize: 200,
    seoKeywords: ["zip creator", "create zip", "compress files"]
  },
  {
    id: "zip-extract",
    name: "ZIP Extractor",
    description: "Extract ZIP files",
    category: "file-utility",
    icon: "📦",
    inputTypes: [".zip"],
    outputType: ".zip",
    action: "extract-zip",
    phase: 3,
    status: "active",
    maxFileSize: 200,
    seoKeywords: ["zip extractor", "unzip", "extract zip"]
  },
  {
    id: "file-splitter",
    name: "File Splitter",
    description: "Split large files into chunks",
    category: "file-utility",
    icon: "✂️",
    inputTypes: [".*"],
    outputType: ".zip",
    action: "split-file",
    phase: 3,
    status: "active",
    maxFileSize: 500,
    seoKeywords: ["file splitter", "split file", "chunk file"]
  },
  {
    id: "add-watermark",
    name: "Watermark Adder",
    description: "Add watermark to images/PDFs",
    category: "file-utility",
    icon: "💧",
    inputTypes: [".pdf", ".jpg", ".jpeg", ".png"],
    outputType: ".pdf",
    action: "add-watermark",
    phase: 3,
    status: "active",
    maxFileSize: 50,
    seoKeywords: ["add watermark", "watermark image", "watermark pdf"]
  },

  // Phase 4: Viral/Niche Tools (Useful conversion tools only)
  {
    id: "collage-maker",
    name: "Image Collage Maker",
    description: "Combine images into collage",
    category: "viral",
    icon: "🖼️",
    inputTypes: [".jpg", ".jpeg", ".png"],
    outputType: ".png",
    action: "make-collage",
    phase: 4,
    status: "active",
    maxFileSize: 50,
    seoKeywords: ["collage maker", "photo collage", "combine images"]
  },
  {
    id: "image-to-pdf",
    name: "Image to PDF",
    description: "Convert images to PDF",
    category: "viral",
    icon: "📄",
    inputTypes: [".jpg", ".jpeg", ".png", ".webp"],
    outputType: ".pdf",
    action: "images-to-pdf",
    phase: 4,
    status: "active",
    maxFileSize: 50,
    seoKeywords: ["image to pdf", "convert image", "jpg to pdf"]
  },
  {
    id: "pdf-to-images",
    name: "PDF to Images",
    description: "Extract images from PDF",
    category: "viral",
    icon: "🖼️",
    inputTypes: [".pdf"],
    outputType: ".zip",
    action: "pdf-to-images",
    phase: 4,
    status: "active",
    maxFileSize: 50,
    seoKeywords: ["pdf to images", "extract images", "pdf to jpg"]
  },
  {
    id: "epub-to-pdf",
    name: "EPUB to PDF",
    description: "Convert eBooks to PDF",
    category: "viral",
    icon: "📚",
    inputTypes: [".epub"],
    outputType: ".pdf",
    action: "epub-to-pdf",
    phase: 4,
    status: "active",
    maxFileSize: 50,
    seoKeywords: ["epub to pdf", "convert ebook", "ebook converter"]
  },

  // Research & Academic Tools (5 tools)
  {
    id: "citation-generator",
    name: "Citation Generator",
    description: "Generate citations from URLs - auto-fetch metadata",
    category: "research",
    icon: "📚",
    inputTypes: [],
    outputType: ".pdf",
    action: "generate-citation",
    phase: 4,
    status: "active",
    maxFileSize: 1,
    seoKeywords: ["citation generator", "apa citation", "mla citation", "chicago citation", "reference generator"],
    acceptsUrl: true,
    urlPlaceholder: "https://example.com/article or DOI: 10.1234/example"
  },
  {
    id: "bibliography-generator",
    name: "Bibliography Generator",
    description: "Create formatted bibliographies from multiple sources",
    category: "research",
    icon: "📖",
    inputTypes: [".json"],
    outputType: ".pdf",
    action: "generate-bibliography",
    phase: 4,
    status: "active",
    maxFileSize: 10,
    seoKeywords: ["bibliography generator", "works cited", "references page", "bibliography maker"]
  },
  {
    id: "research-paper-formatter",
    name: "Research Paper Formatter",
    description: "Format papers to APA, MLA, or Chicago standards",
    category: "research",
    icon: "📝",
    inputTypes: [".txt", ".docx"],
    outputType: ".pdf",
    action: "format-research-paper",
    phase: 4,
    status: "active",
    maxFileSize: 20,
    seoKeywords: ["research paper formatter", "academic formatting", "apa format", "mla format", "paper formatting"]
  },
  {
    id: "reference-list-organizer",
    name: "Reference List Organizer",
    description: "Sort and organize references alphabetically",
    category: "research",
    icon: "🔤",
    inputTypes: [".txt", ".json"],
    outputType: ".pdf",
    action: "organize-references",
    phase: 4,
    status: "active",
    maxFileSize: 10,
    seoKeywords: ["reference organizer", "sort references", "alphabetize references", "organize bibliography"]
  },
  {
    id: "text-analyzer",
    name: "Academic Text Analyzer",
    description: "Analyze word count, readability, and citation count",
    category: "research",
    icon: "🔍",
    inputTypes: [".txt", ".docx"],
    outputType: ".json",
    action: "analyze-text",
    phase: 4,
    status: "active",
    maxFileSize: 20,
    seoKeywords: ["text analyzer", "word count", "readability score", "academic analysis", "writing analysis"]
  }
];

export const categories = [
  { id: "social", name: "Social Media Downloaders", icon: "📱", description: "Download videos and media from social platforms" },
  { id: "video", name: "Video Tools", icon: "🎥", description: "Process and convert videos" },
  { id: "pdf", name: "PDF Tools", icon: "📄", description: "Manage and manipulate PDF documents" },
  { id: "image", name: "Image Tools", icon: "🖼️", description: "Edit and convert images" },
  { id: "audio", name: "Audio Tools", icon: "🔊", description: "Work with audio files" },
  { id: "document", name: "Document Tools", icon: "📝", description: "Work with Word documents" },
  { id: "generator", name: "Document Generators", icon: "✨", description: "Generate professional documents" },
  { id: "research", name: "Research & Academic Tools", icon: "🎓", description: "Tools for research and academic writing" },
  { id: "productivity", name: "Productivity Tools", icon: "⚡", description: "Boost your productivity" },
  { id: "file-utility", name: "File Utilities", icon: "🔧", description: "Various file utilities" },
  { id: "qrcode", name: "QR Code Tools", icon: "📱", description: "Generate and decode QR codes" },
  { id: "utility", name: "Utility Tools", icon: "🔧", description: "Various file utilities" }
];

export function getToolById(id: string): ToolConfig | undefined {
  return toolsConfig.find(tool => tool.id === id);
}

export function getToolsByCategory(category: string): ToolConfig[] {
  return toolsConfig.filter(tool => tool.category === category);
}

export function getToolsByPhase(phase: number): ToolConfig[] {
  return toolsConfig.filter(tool => tool.phase === phase);
}

export function getActiveTools(): ToolConfig[] {
  return toolsConfig.filter(tool => tool.status === 'active' || !tool.status);
}

export function getAllCategories() {
  return categories;
}
