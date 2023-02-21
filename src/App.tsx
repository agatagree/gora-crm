import { BrowserRouter } from "react-router-dom";
import { AppRouts } from "routes/AppRouts";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Navigation } from "components";

export const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Flex flexDirection={"column"} minHeight="100vh">
          {/* <Navigation /> */}
          <AppRouts />
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
};
