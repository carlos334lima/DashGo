import { useQuery } from "react-query";
import { loadUsers } from "../services/requests";

export function useUsers() {
    return useQuery(
        "users",
        loadUsers,
        {
          staleTime: 1000 * 5, // 5 seconds
        }
      );
}