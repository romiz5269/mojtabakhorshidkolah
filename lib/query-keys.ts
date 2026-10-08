export const queryKeys = {
  auth: ["auth"],

  dashboard: ["dashboard"],

  categories: ["categories"],

  category: (id: string) => ["categories", id],

  projects: ["projects"],

  project: {
    all: ["projects"],

    list: ["projects", "list"],

    detail: (id: string) => ["projects", id],

    pagination: (query: any) => ["projects", query],
  },

  posts: ["posts"],

  post: (id: string) => ["posts", id],
};
