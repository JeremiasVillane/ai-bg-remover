import { Loader2 } from "lucide-react";

export function RenderLoader() {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      <Loader2 className="animate-spin" />
      <span>Loading AI model...</span>
    </div>
  );
}
