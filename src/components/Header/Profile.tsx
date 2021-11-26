//@libraries
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Carlos Henrique de Lima</Text>
        <Text color="gray.300" fontSize="small">
          carlos334lima@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Carlos Lima" />
    </Flex>
  );
}
