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
