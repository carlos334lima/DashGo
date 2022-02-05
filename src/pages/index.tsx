//@libraries
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Flex, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";

//@component
import { Input } from "../components/Form/Input";

//@utils
import { SignFormData } from "../@types";
import { SchemaSignForm } from "../utils/Schemas";



export default function SingIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SchemaSignForm),
  });
  const { isSubmitting, errors } = formState;

  const handleSignIn: SubmitHandler<SignFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        p="8"
        w="100%"
        as="form"
        bg="gray.800"
        flexDir="column"
        maxWidth={360}
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            {...register("email")}
            error={errors.email}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            {...register("password")}
            error={errors.password}
          />
        </Stack>

        <Button
          type="submit"
          size="lg"
          mt="6"
          colorScheme="pink"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
