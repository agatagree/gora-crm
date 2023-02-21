import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { Navigation } from "components";
import { AuthContext } from "provider/AuthProvider";

export const AdminPanel = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return (
    <Flex w="100%" h="100%" flex={1} bg="lightblue">
      <Navigation />
      <Flex
        bg="lightgoldenrodyellow"
        flexDirection={"column"}
        flexGrow={1}
        sx={{ overflow: "auto" }}
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};
