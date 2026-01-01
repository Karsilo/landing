import type { Metadata } from "next";
import { Layout } from "@/components/layout/layout";
import { FileCompressorPage } from "@/components/app/tools/file-compressor/FileCompressorPage";

export const metadata: Metadata = {
  title: "File Compressor",
  description: "Compress images and PDFs to reduce file size while maintaining quality. No uploads required - everything happens in your browser.",
  openGraph: {
    title: "File Compressor | Karsilo",
    description: "Compress images and PDFs to reduce file size while maintaining quality. No uploads required - everything happens in your browser.",
  },
};

export default function FileCompressor() {
  return (
    <Layout>
      <FileCompressorPage />
    </Layout>
  );
}
