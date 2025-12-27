import { Layout } from "@/components/layout/layout";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function BibliographyCreator() {
  return (
    <Layout>
      <div className="container max-w-6xl py-16 md:py-24">
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Bibliography Creator</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Generate properly formatted citations in APA, MLA, Chicago, and Harvard
            styles
          </p>
        </div>

        <Card className="p-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're working on building a comprehensive bibliography creator that will
            support multiple citation formats and source types. Check back soon!
          </p>

          <div className="mt-8 max-w-2xl mx-auto text-left">
            <h3 className="font-semibold mb-4">Planned Features:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Support for APA, MLA, Chicago, and Harvard citation styles</li>
              <li>• Multiple source types (books, journals, websites, videos)</li>
              <li>• Live citation preview</li>
              <li>• Copy to clipboard functionality</li>
              <li>• Export as .txt or .bib files</li>
              <li>• Save and manage citation libraries</li>
            </ul>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
