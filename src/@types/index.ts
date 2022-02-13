export interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
export interface SignFormData {
  email: string;
  password: string;
}
export interface IDataUser {
  users: {
    id: number;
    name: string;
    email: string;
    created_at: string;
  }[];
}
