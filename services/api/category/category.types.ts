export interface Category {
  id: string;

  name: string;

  slug: string;

  description: string | null;

  createdAt: string;

  updatedAt: string;
}

export interface CreateCategory {
  name: string;

  slug: string;

  description: string | null;
}

export type UpdateCategory = Partial<CreateCategory>;
