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
import { InputBase } from "../components/Form/input";

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
          <InputBase type="email" name="email" label="E-mail" />
          <InputBase type="password" name="password" label="Senha" />
        </Stack>

        <Button type="submit" size="lg" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
