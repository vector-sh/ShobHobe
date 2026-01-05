# ShobHobe

A universal file processing toolkit built with Next.js 14 and TypeScript.

## Features

- **60+ Tools** across 6 categories:
  - PDF Tools (10 tools) - Merge, split, compress, rotate, watermark, protect, extract text/images
  - Image Tools (15 tools) - Resize, compress, convert, crop, rotate, filters, watermarks, and more
  - Video Tools (10 tools) - Compress, convert, trim, merge, extract audio/thumbnails
  - Document Tools (10 tools) - Convert DOCX to PDF, merge, split, extract content
  - QR Code Tools (5 tools) - Generate, decode, batch create, custom styling
  - Utility Tools (10 tools) - ZIP operations, hashing, Base64, JSON formatting

- **Universal Template System**: Add a tool to `tools.config.ts` and automatically get:
  - Dynamic route `/tools/[slug]`
  - API endpoint `/api/tools/[category]/[action]`
  - Pre-built UI with upload/process/download flow

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Processing Libraries**:
  - `pdf-lib` - PDF manipulation
  - `sharp` - Image processing
  - `fluent-ffmpeg` - Video processing
  - `docx` - Document handling
  - `qrcode` - QR code generation

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
├── app/
│   ├── api/tools/[category]/[action]/route.ts  # Universal API handler
│   ├── tools/[slug]/page.tsx                   # Dynamic tool pages
│   ├── page.tsx                                # Homepage
│   └── layout.tsx                              # Root layout
├── components/
│   └── ToolPageTemplate.tsx                    # Universal tool UI template
├── services/
│   └── fileProcessor.ts                        # Processing logic
└── tools.config.ts                             # 60 tool definitions
```

## Adding a New Tool

1. Add tool definition to `tools.config.ts`:
```typescript
{
  id: "new-tool",
  name: "My New Tool",
  description: "What it does",
  category: "category-name",
  icon: "🔧",
  inputTypes: [".ext"],
  outputType: ".ext",
  action: "action-name"
}
```

2. Implement processing logic in `services/fileProcessor.ts`

3. That's it! The route, API, and UI are auto-generated.

## License

MIT
