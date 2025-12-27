import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
  comingSoon?: boolean;
}

export function ToolCard({
  title,
  description,
  icon,
  href,
  comingSoon = false,
}: ToolCardProps) {
  return (
    <Card className="group relative flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardHeader className="relative space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
            )}
            <div className="flex flex-col gap-1">
              <CardTitle className="text-xl font-bold">{title}</CardTitle>
              {comingSoon && (
                <Badge variant="secondary" className="w-fit text-xs">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Coming Soon
                </Badge>
              )}
            </div>
          </div>
        </div>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="relative mt-auto pt-4">
        {comingSoon ? (
          <Button disabled className="w-full" variant="outline">
            Coming Soon
          </Button>
        ) : (
          <Button asChild className="w-full group/button">
            <Link href={href}>
              Launch Tool
              <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
