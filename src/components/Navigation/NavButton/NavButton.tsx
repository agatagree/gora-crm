import { ReactNode } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { Heading, Link } from "@chakra-ui/react";

type NavButtonTypes = {
  text: string;
  logo: ReactNode;
  linkTo: string;
  onClick?: () => void;
};

export const NavButton = ({ text, logo, linkTo, onClick }: NavButtonTypes) => {
  return (
    <Link
      as={RouterLink}
      to={linkTo}
      onClick={onClick}
      flexDirection="row"
      display="flex"
      alignItems="center"
      gap={3}
      mb={3}
    >
      {logo}
      <Heading fontSize="md">{text}</Heading>
    </Link>
  );
};
