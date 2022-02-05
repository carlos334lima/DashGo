import * as yup from "yup";

export const SchemaSignForm = yup.object().shape({
  email: yup.string().required("E-mail obrigatório!").email(),
  password: yup.string().required("Senha obrigatório!"),
});

export const SchemaCreateUserForm = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  email: yup.string().required("E-mail obrigatório!").email(),
  password: yup.string().required("Senha obrigatório!"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais."),
});
