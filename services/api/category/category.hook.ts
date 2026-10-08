import {queryKeys} from "@/shared/types/query-keys";
import {categoryApi} from "./category.api";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {CreateCategory, UpdateCategory} from "./category.types";

export function useGetCategories() {
  return useQuery({
    queryKey: queryKeys.categories,

    queryFn: () => categoryApi.getAll(),
  });
}
export function useGetCategory(id: string) {
  return useQuery({
    enabled: !!id,

    queryKey: [...queryKeys.categories, id],

    queryFn: async () => await categoryApi.getById(id),
  });
}

export function useCreateCategory() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCategory) => {
      return categoryApi.create(data);
    },

    onSuccess() {
      qc.invalidateQueries({
        queryKey: queryKeys.categories,
      });
    },
  });
}

export function useUpdateCategory() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn(params: {
      id: string;

      data: UpdateCategory;
    }) {
      return categoryApi.update(
        params.id,

        params.data,
      );
    },

    onSuccess() {
      qc.invalidateQueries({
        queryKey: queryKeys.categories,
      });
    },
  });
}

export function useDeleteCategory() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn(id: string) {
      return categoryApi.delete(id);
    },

    onSuccess() {
      qc.invalidateQueries({
        queryKey: queryKeys.categories,
      });
    },
  });
}
