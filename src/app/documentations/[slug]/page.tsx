import { redirect } from "next/navigation";
import { DOCUMENTATIONS } from "@/data/documentations";

interface DocumentationShimProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return DOCUMENTATIONS.map((doc) => ({ slug: doc.slug }));
}

export default function DocumentationShim({ params }: DocumentationShimProps) {
  // Redirect any /documentations/[slug] requests to the new /docs/[slug] viewer route
  redirect(`/docs/${encodeURIComponent(params.slug)}`);
}
