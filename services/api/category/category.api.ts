
import { request } from "@/lib/request";
import {Category, CreateCategory, UpdateCategory} from "./category.types";

export const categoryApi = {
  getAll() {
    return request<Category[]>({
      url: "/categories",

      method: "GET",
    });
  },

  getById(id: string) {
    return request<Category>({
      url: `/categories/${id}`,

      method: "GET",
    });
  },

  create(data: CreateCategory) {
    return request<Category>({
      url: "/categories",

      method: "POST",

      data,
    });
  },

  update(
    id: string,

    data: UpdateCategory,
  ) {
    return request<Category>({
      url: `/categories/${id}`,

      method: "PATCH",

      data,
    });
  },

  delete(id: string) {
    return request<void>({
      url: `/categories/${id}`,

      method: "DELETE",
    });
  },
};
