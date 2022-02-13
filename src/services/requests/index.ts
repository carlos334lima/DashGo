//@utils
import { api } from "./api";
import { userFormatted } from "../../utils";
import { IDataUser } from "../../@types";

type GetUsersResponse = {
  totalCount: number;
  users: any;
}

export async function loadUsers(currentPage: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("/users", {
    params: {
      page: currentPage,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = userFormatted(data);

  return { users, totalCount };
}
