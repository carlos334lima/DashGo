//@libraries
import { useQuery } from "react-query";

//@utils
import { loadUsers } from "../services/requests";

export function useUsers(currentPage: number) {
  return useQuery(["users", currentPage], () => loadUsers(currentPage), {
    staleTime: 1000 * 5, // 5 seconds
  });
}
