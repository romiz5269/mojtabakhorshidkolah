
import { request } from "@/lib/request";
import type {
  Project,
  ProjectList,
  ProjectQuery,
  CreateProject,
  UpdateProject,
} from "./project.types";
import { PaginatedResponse } from "@/shared/types/pagination.type";


export const projectApi = {
  getAll(query?: ProjectQuery) {
    return request<PaginatedResponse<Project>>({
      url: "/projects",

      method: "GET",

      params: query,
    });
  },

  getList() {
    return request<ProjectList[]>({
      url: "/projects/list",

      method: "GET",
    });
  },

  getById(id: string) {
    return request<Project>({
      url: `/projects/${id}`,

      method: "GET",
    });
  },

  create(data: CreateProject) {
    return request<Project>({
      url: "/projects",

      method: "POST",

      data,
    });
  },

  update(id: string, data: UpdateProject) {
    return request<Project>({
      url: `/projects/${id}`,

      method: "PATCH",

      data,
    });
  },

  delete(id: string) {
    return request<void>({
      url: `/projects/${id}`,

      method: "DELETE",
    });
  },
};
