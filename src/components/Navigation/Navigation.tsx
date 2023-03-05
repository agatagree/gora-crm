import { useContext } from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import { LogOutIcon, SettingsIcon } from "components/Icons";
import { NavButton } from "./NavButton";
import { NavList } from "./NavList";
import { Logo } from "components";
import { AuthContext } from "provider/AuthProvider";

export const Navigation = () => {
  const { setUser } = useContext(AuthContext);

  return (
    <Flex
      as="nav"
      flexDirection={"column"}
      justifyContent={"space-between"}
      w="324px"
      bg="white"
      boxShadow="md"
      h="100vh"
      alignSelf={"flex-start"}
      position="sticky"
      top={0}
      p={30}
    >
      <Box>
        <Flex flexDirection="row" alignItems="center" gap={3} mb={20} whiteSpace={"nowrap"}>
          <Logo />
          <Text fontSize="2xl">Panel Admina</Text>
        </Flex>
        {Object.values(NavList).map((btn) => (
          <NavButton
            key={btn.id}
            text={btn.text}
            logo={btn.logo}
            linkTo={btn.linkTo}
          />
        ))}
      </Box>
      <Flex flexDirection={"column"}>
        <NavButton
          text={"Ustawienia"}
          logo={<SettingsIcon boxSize={8} />}
          linkTo={"settings"}
        />
        <NavButton
          text={"Wyloguj się"}
          logo={<LogOutIcon boxSize={8} />}
          onClick={() => setUser("")}
          linkTo={"/"}
        />
      </Flex>
    </Flex>
  );
};
