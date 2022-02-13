import { IDataUser } from "../@types";

export function userFormatted(data: IDataUser) {
  const users = data.users.map((user) => {
    const userFormartted = {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.created_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };

    return userFormartted;
  });

  return users;
}

export function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}
