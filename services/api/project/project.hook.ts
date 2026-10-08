import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

import {projectApi} from "./project.api";


import type {CreateProject, ProjectQuery, UpdateProject} from "./project.types";
import { queryKeys } from "@/lib/query-keys";

export function useProjects(query?: ProjectQuery) {
  return useQuery({
    queryKey: queryKeys.project.pagination(query),

    queryFn: () => projectApi.getAll(query),
  });
}

export function useProject(id: string) {
  return useQuery({
    enabled: !!id,

    queryKey: queryKeys.project.detail(id),

    queryFn: () => projectApi.getById(id),
  });
}

export function useProjectList() {
  return useQuery({
    queryKey: queryKeys.project.list,

    queryFn: projectApi.getList,
  });
}

export function useCreateProject() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateProject) => projectApi.create(data),

    onSuccess() {
      qc.invalidateQueries({
        queryKey: queryKeys.project.all,
      });
    },
  });
}

export function useUpdateProject() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,

      data,
    }: {
      id: string;

      data: UpdateProject;
    }) =>
      projectApi.update(
        id,

        data,
      ),

    onSuccess() {
      qc.invalidateQueries({
        queryKey: queryKeys.project.all,
      });
    },
  });
}

export function useDeleteProject() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => projectApi.delete(id),

    onSuccess() {
      qc.invalidateQueries({
        queryKey: queryKeys.project.all,
      });
    },
  });
}
