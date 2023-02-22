import {
  DashboardIcon,
  BannerIcon,
  PendingIcon,
} from "components/Icons";

export const MainNavigation = {
  dashboard: {
    id: 1,
    text: "Panel zarządzania",
    logo: <DashboardIcon boxSize={8} />,
    linkTo: "",
  },
  pendingPosts: {
    id: 2,
    text: "W kolejce",
    logo: <PendingIcon boxSize={8} />,
    linkTo: "pending",
  },
  bannerPosts: {
    id: 3,
    text: "Baner główny",
    logo: <BannerIcon boxSize={8} />,
    linkTo: "banner",
  },
};