import { Button } from "@chakra-ui/button";
import { Box, Stack } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = true,
  onPageChange,
  number,
}: PaginationItemProps) {
  return (
    <Stack
      direction={["column","row"]}
      mt="8"
      align="center"
      justify="space-between"
      spacing="6"
    >
      <Box>
        <strong> 0 </strong> - <strong> 10 </strong> de <strong> 100 </strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: "pink.500",
            cursor: "default",
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          3
        </Button>
      </Stack>
    </Stack>
  );
}
