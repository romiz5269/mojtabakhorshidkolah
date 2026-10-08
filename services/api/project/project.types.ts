import { ProjectStatus } from "@/shared/enums/project.enums";

export interface Project {
  id: string;

  title: string;

  slug: string;

  shortDescription: string;

  description: string;

  thumbnail: Media | null;

  githubUrl: string | null;

  liveUrl: string | null;

  videoUrl: string | null;

  featured: boolean;

  status: ProjectStatus;

  order: number;

  startedAt: string | null;

  finishedAt: string | null;

  technologies: TechnologyList[];

  images: Media[];

  createdAt: string;

  updatedAt: string;
}

export interface ProjectList {
  id: string;

  title: string;

  slug: string;
}

export interface CreateProject {
  title: string;

  slug: string;

  shortDescription: string;

  description: string;

  thumbnailId?: string | null;

  githubUrl?: string | null;

  liveUrl?: string | null;

  videoUrl?: string | null;

  featured?: boolean;

  status: ProjectStatus;

  order?: number;

  technologyIds: string[];

  imageIds: string[];

  startedAt?: string | null;

  finishedAt?: string | null;
}

export type UpdateProject = Partial<CreateProject>;

export interface ProjectQuery {
  page?: number;

  limit?: number;

  search?: string;

  featured?: boolean;

  status?: ProjectStatus;

  sort?: string;

  order?: "asc" | "desc";
}
