import { api } from "./api";

export async function loadUsers() {
  const response = await api.get("/users");
  const { data } = response;

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
