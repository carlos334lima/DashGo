import NextLink from "next/link";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

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
import { Pagination } from "../../components/Pagination";

//@utils
import { useUsers } from "../../hooks/useUsers";

export default function UserList({ users }) {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useUsers(currentPage);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados do usuário!</Text>
            </Flex>
          ) : (
            <>
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
                  {data.users.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Link color="purple.400">
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>
                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
