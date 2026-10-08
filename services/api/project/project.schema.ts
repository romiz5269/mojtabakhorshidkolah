import { ProjectStatus } from "@/shared/enums/project.enums";
import {z} from "zod";


export const projectSchema = z.object({
  title: z.string().min(2).max(200),

  slug: z.string().min(2).max(200),

  shortDescription: z.string().min(2).max(500),

  description: z.string().min(2),

  thumbnailId: z.string().nullable().optional(),

  githubUrl: z.string().url().nullable().optional(),

  liveUrl: z.string().url().nullable().optional(),

  videoUrl: z.string().url().nullable().optional(),

  featured: z.boolean().default(false),

  status: z.nativeEnum(ProjectStatus),

  order: z.number().default(0),

  technologyIds: z.array(z.string()),

  imageIds: z.array(z.string()),

  startedAt: z.string().nullable().optional(),

  finishedAt: z.string().nullable().optional(),
});

export type ProjectForm = z.infer<typeof projectSchema>;
