import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "../../../lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) {
    notFound();
  }
  return (
    <div className="min-h-screen py-20 bg-brand-base text-white">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        <h1
          className="text-3xl md:text-4xl font-bold"
          style={{ color: "#FEA485" }}
        >
          {project.title}
        </h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-2xl"
        />
        <p className="whitespace-pre-line text-white text-sm">
          {project.description}
        </p>
        <Link href="/" className="text-brand-accent">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
