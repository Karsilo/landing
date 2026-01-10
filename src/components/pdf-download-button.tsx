"use client";

import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { events } from "@/lib/analytics";

interface PDFButtonProps {
  href: string;
  label: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  course?: string;
  module?: string;
}

export function PDFButton({
  href,
  label,
  variant = "default",
  course,
  module,
}: PDFButtonProps) {
  const handleClick = () => {
    events.buttonClick(label, `questions_page${course ? `_${course.toLowerCase()}` : ''}${module ? `_${module}` : ''}`);
  };

  return (
    <Button variant={variant} asChild className="w-full sm:flex-1">
      <a href={href} target="_blank" onClick={handleClick}>
        <FileText className="mr-2 h-4 w-4" />
        {label}
      </a>
    </Button>
  );
}
