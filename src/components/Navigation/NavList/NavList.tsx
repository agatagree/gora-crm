import {
  DashboardIcon,
  BannerIcon,
  PendingIcon,
  AddIcon,
} from "components/Icons";

export const NavList = {
  dashboard: {
    id: 1,
    text: "Panel zarządzania",
    logo: <DashboardIcon boxSize={8} />,
    linkTo: "dashboard",
  },
  add: {
    id: 2,
    text: "Dodaj nowy",
    logo: <AddIcon boxSize={8} />,
    linkTo: "add",
  },
  pendingPosts: {
    id: 3,
    text: "W kolejce",
    logo: <PendingIcon boxSize={8} />,
    linkTo: "pending",
  },
  bannerPosts: {
    id: 4,
    text: "Baner główny",
    logo: <BannerIcon boxSize={8} />,
    linkTo: "banner",
  },
};
