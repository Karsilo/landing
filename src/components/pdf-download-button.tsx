import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface PDFButtonProps {
  href: string;
  label: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
}

export function PDFButton({
  href,
  label,
  variant = "default",
}: PDFButtonProps) {
  return (
    <Button variant={variant} asChild className="w-full sm:flex-1">
      <a href={href} target="_blank">
        <FileText className="mr-2 h-4 w-4" />
        {label}
      </a>
    </Button>
  );
}
