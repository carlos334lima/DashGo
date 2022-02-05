import Link from "next/link";
import { useRouter } from "next/router";

//@libraries
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

//@components
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";

//@utils
import { CreateUserFormData } from "../../@types";
import { SchemaCreateUserForm } from "../../utils/Schemas";


export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SchemaCreateUserForm),
  });
  const { errors, isSubmitting } = formState;

  const handleCreateNewUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("values", values);
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateNewUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome completo"
                {...register("name")}
                error={errors.name}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                {...register("email")}
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                {...register("password")}
                error={errors.password}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
                {...register("password_confirmation")}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
