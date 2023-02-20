import { ReactNode } from "react";

import { Flex, Card, CardBody, Heading } from "@chakra-ui/react";
import { Logo } from "components";

type LayoutTypes = {
  children: ReactNode;
  header: string;
};

export const AuthorizationLayout = ({ children, header }: LayoutTypes) => {
  return (
    <Flex
      flexDirection={"column"}
      w="100%"
      h="100%"
      bg="lightblue"
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card minH={400} maxW="md" minW="sm">
        <CardBody py={12}>
          <Flex justifyContent={"center"} mb={6}>
            <Logo />
          </Flex>
          <Heading textAlign={["center"]} mb={12}>
            {header}
          </Heading>
          {children}
        </CardBody>
      </Card>
    </Flex>
  );
};
