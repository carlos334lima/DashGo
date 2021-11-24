//@libraries
import { RiMenuLine } from "react-icons/ri";
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

//@components
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
/* import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";   */

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
    </Flex>
  );
}
