import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

export const AdminRoutingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex flexDirection={"column"} px={10}>
      {children}
    </Flex>
  );
};
