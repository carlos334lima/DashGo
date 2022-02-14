//@utils
import { api } from "./api";
import { userFormatted } from "../../utils";

type GetUsersResponse = {
  totalCount: number;
  users: any;
};

export async function loadUsers(
  currentPage: number
): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("/users", {
    params: {
      page: currentPage,
    },
  });
  const totalCount = Number(headers["x-total-count"]);
  const users = userFormatted(data);

  return { users, totalCount };
}

export async function prefetchQuery(userId: number) {
  const { data } = await api.get(`/users/${userId}`);

  return data;
}
