import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button, Text, Flex } from "@chakra-ui/react";
import { Logo } from "components";
import { AuthContext } from "provider/AuthProvider";
import { DashboardIcon, BannerIcon, LogOutIcon, SettingsIcon, PendingIcon } from "components/Icons";
import { NavButton } from "./NavButton";

const NavigationLinks = {
  dashboard: {
    text: "Panel zarządzania",
    logo: <DashboardIcon boxSize={8}/>,
    linkTo: "/admin",
  },
  pendingPosts: {
    text: "W kolejce",
    logo: <PendingIcon boxSize={8} />,
    linkTo: "/pending",
  },
  bannerPosts: {
    text: "Baner Główny",
    logo: <BannerIcon boxSize={8}/>,
    linkTo: "/banner",
  },
}

export const Navigation = () => {
  const { setUser } = useContext(AuthContext);
  return (
    <Flex
      as="nav"
      flexDirection={"column"}
      w="300px"
      bg="white"
      boxShadow="md"
      h="100vh"
      alignSelf={"flex-start"}
      position="sticky"
      top={0}
      p={30}
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        bg="lightcoral"
        gap={2}
      >
        <Logo />
        <Text fontSize="2xl">Panel Admina</Text>
      </Flex>

      <NavLink to="/admin">Panel zarządzania</NavLink>
      <NavLink to="/pending">Zapisane</NavLink>
      <NavLink to="/banner">Baner</NavLink>
      <NavLink to="/settings">Ustawienia</NavLink>
      <DashboardIcon boxSize={8}/>
      <BannerIcon boxSize={8}/>
      <LogOutIcon boxSize={8}/>
      <SettingsIcon boxSize={8} />
      <PendingIcon boxSize={8} />
      <Button onClick={() => setUser("")}>Log out</Button>
      <NavButton text={"Zapisane"} logo={<PendingIcon boxSize={8} />} linkTo={"/pending"} />
    </Flex>
  );
};
