import { Button, Flex } from "@chakra-ui/react";

export const DashboardNav = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <Flex justifyContent={"flex-end"} pb={8} gap={3}>
      <Button onClick={onOpen}>Filtruj</Button>
    </Flex>
  );
};
