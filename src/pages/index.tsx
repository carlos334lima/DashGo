//@libraries
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Flex,
  Button,
  Stack,
  Input,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

export default function SingIn() {
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
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              size="lg"
              variant="filled"
              bgColor="gray.900"
              placeholder="E-mail"
              focusBorderColor="pink.500"
              _hover={{ bgColor: "gray.900" }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              size="lg"
              variant="filled"
              bgColor="gray.900"
              placeholder="Senha"
              focusBorderColor="pink.500"
              _hover={{ bgColor: "gray.900" }}
            />
          </FormControl>
        </Stack>

        <Button type="submit" size="lg" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
