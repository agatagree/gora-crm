import { ReactNode } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { Heading, Link } from "@chakra-ui/react";

type NavButtonTypes = {
  text: string;
  logo: ReactNode;
  linkTo: string;
};

export const NavButton = ({ text, logo, linkTo }: NavButtonTypes) => {
  return (
    <Link
      as={RouterLink}
      to={linkTo}
      flexDirection="row"
      display="flex"
      alignItems="center"
      gap={3}
    >
      {logo}
      <Heading fontSize="md">{text}</Heading>
    </Link>
  );
};
