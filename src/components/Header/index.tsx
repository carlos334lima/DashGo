//@libraries
import { RiMenuLine } from "react-icons/ri";
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

//@components
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { NotificationsNav } from "./NotificationsNav";

//@utils
//import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function Header() {
  return (
    <Flex
      h="20"
      mt="4"
      px="6"
      w="100%"
      mx="auto"
      as="header"
      align="center"
      maxWidth={1480}
    >
      <Logo />
      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
