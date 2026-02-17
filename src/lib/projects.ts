import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { projects } from "../../content/projects/projects";

const contentDirectory = path.join(process.cwd(), "content/projects");

export interface ProjectCaseStudy {
    slug: string;
    title: string;
    date: string;
    description: string;
    tech: string[];
    image: string;
    content: string;
    github?: string;
    link?: string;
}

export function getProjectBySlug(slug: string): ProjectCaseStudy | null {
    try {
        // Find project from projects.ts list first
        const projectData = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === slug || p.id.toLowerCase() === slug);

        const fullPath = path.join(contentDirectory, `${slug}.md`);
        if (!fs.existsSync(fullPath)) {
            // If no MD file exists, return basic info from projects.ts if available
            if (projectData) {
                return {
                    slug,
                    title: projectData.title,
                    date: "2024-01-01",
                    description: projectData.description,
                    tech: projectData.tech,
                    image: projectData.thumbnail,
                    content: "# Case Study coming soon\n\nContent for this project is being prepared.",
                    github: projectData.github,
                    link: projectData.link
                };
            }
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            title: data.title || (projectData?.title || "Untitled Project"),
            date: data.date || "2024-01-01",
            description: data.description || (projectData?.description || ""),
            tech: data.tech || (projectData?.tech || []),
            image: data.image || (projectData?.thumbnail || ""),
            github: data.github || (projectData?.github || ""),
            link: data.link || (projectData?.link || ""),
        };
    } catch {
        return null;
    }
}
