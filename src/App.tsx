import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { AppRouts } from "routes/AppRouts";
import { AuthProvider } from "provider/AuthProvider";

export const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Flex flexDirection={"column"} minHeight="100vh">
          <AuthProvider>
            <AppRouts />
          </AuthProvider>
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
};
