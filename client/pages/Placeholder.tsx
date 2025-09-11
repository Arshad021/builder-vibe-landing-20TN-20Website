import { useParams } from "react-router-dom";

export default function Placeholder() {
  const { slug } = useParams();
  const title = (slug || "Page").replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
  return (
    <main className="container mx-auto min-h-[60vh] py-16">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        This page is ready to be crafted to your needs. Tell me what content you want here and I’ll build it.
      </p>
    </main>
  );
}
