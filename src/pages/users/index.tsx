import { useState } from "react";
import NextLink from "next/link";
import { GetServerSideProps } from "next";

//@libraries
import { RiAddLine } from "react-icons/ri";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";

//@components
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { PaginationItem } from "../../components/Pagination/Pagination";

export default function UserList({ users }) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <NextLink href="/users/create">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Link color="purple.400">
                      <Text fontWeight="bold">Carlos Lima</Text>
                    </Link>
                    <Text fontSize="sm" color="gray.300">
                      carlos334lima@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de maio, 2022</Td>}
              </Tr>
            </Tbody>
          </Table>

          <PaginationItem
                totalCountOfRegisters={10}
                currentPage={2}
              />
        </Box>
      </Flex>
    </Box>
  );
}
