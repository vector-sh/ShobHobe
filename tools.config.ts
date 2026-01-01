export interface ToolConfig {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  inputTypes: string[];
  outputType: string;
  action: string;
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
  }
];

export const categories = [
  { id: "pdf", name: "PDF Tools", icon: "📄", description: "Manage and manipulate PDF documents" },
  { id: "image", name: "Image Tools", icon: "🖼️", description: "Edit and convert images" },
  { id: "video", name: "Video Tools", icon: "🎥", description: "Process and convert videos" },
  { id: "document", name: "Document Tools", icon: "📝", description: "Work with Word documents" },
  { id: "qrcode", name: "QR Code Tools", icon: "📱", description: "Generate and decode QR codes" },
  { id: "utility", name: "Utility Tools", icon: "🔧", description: "Various file utilities" }
];

export function getToolById(id: string): ToolConfig | undefined {
  return toolsConfig.find(tool => tool.id === id);
}

export function getToolsByCategory(category: string): ToolConfig[] {
  return toolsConfig.filter(tool => tool.category === category);
}

export function getAllCategories() {
  return categories;
}
