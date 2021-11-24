import dynamic from "next/dynamic";

//@libraries
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";

//@components
import { Header } from "../components/Header";
import { SearchBox } from "../components/Header/SearchBox";
//import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex>
      <Header />
    </Flex>
  );
}
