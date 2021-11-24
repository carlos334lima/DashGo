import { useRef, useState } from "react";

//@libraries
import { RiSearchLine } from "react-icons/ri";
import { Flex, Icon, Input } from "@chakra-ui/react";

export function SearchBox() {
  return (
    <Flex
      py="4"
      px="8"
      ml="6"
      flex="1"
      as="label"
      maxWidth={400}
      bg="gray.800"
      color="gray.200"
      alignSelf="center"
      position="relative"
      borderRadius="full"
    >
      <Input
        px="4"
        mr="4"
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
      />

      <Icon as={RiSearchLine} fontSize="22" />
    </Flex>
  );
}
