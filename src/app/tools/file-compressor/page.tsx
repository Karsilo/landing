import { Layout } from "@/components/layout/layout";
import { Card } from "@/components/ui/card";
import { Archive } from "lucide-react";

export default function FileCompressor() {
  return (
    <Layout>
      <div className="container max-w-6xl py-16 md:py-24">
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <Archive className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">File Compressor</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compress images and PDFs to reduce file size while maintaining quality
          </p>
        </div>

        <Card className="p-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're developing a powerful file compression tool that works entirely in
            your browser - no uploads required. Stay tuned!
          </p>

          <div className="mt-8 max-w-2xl mx-auto text-left">
            <h3 className="font-semibold mb-4">Planned Features:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Support for JPG, PNG, WebP, and PDF files</li>
              <li>• Adjustable compression quality slider</li>
              <li>• Before/after file size comparison</li>
              <li>• Batch processing for multiple files</li>
              <li>• Preview compressed files before download</li>
              <li>• Client-side processing - your files never leave your device</li>
              <li>• Drag and drop interface</li>
            </ul>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
