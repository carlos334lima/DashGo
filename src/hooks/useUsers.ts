//@libraries
import { useQuery, UseQueryOptions } from "react-query";

//@utils
import { loadUsers } from "../services/requests";

export function useUsers(currentPage: number, options: UseQueryOptions) {
  return useQuery(["users", currentPage], () => loadUsers(currentPage), {
    staleTime: 1000 * 60 * 10,
    ...options,
  });
}
