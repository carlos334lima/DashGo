import { Stack, Button, Box, Text } from "@chakra-ui/react";

//@components
import { PaginationItem } from "./Pagination";

//@utils
import { generatePagesArray } from "../../utils";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);
  const siblingsCount = 1;

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      align="center"
      justify="space-between"
      spacing="6"
    >
      <Box>
        <strong> 0 </strong> - <strong> 10 </strong> de <strong> 100 </strong>
      </Box>
      <Stack direction="row" spacing="2">
        {/* rules pagination */}
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" textAlign="center" width="8">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" textAlign="center" width="8">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
