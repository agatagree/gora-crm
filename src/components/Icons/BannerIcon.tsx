import { Icon, IconProps } from "@chakra-ui/react";

export const BannerIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 33 33" color="none" {...props}>
      <path
        fill="black"
        d="M26.5 4H6.25C5.0125 4 4 5.2375 4 6.75V26C4 27.5125 5.0125 28.75 6.25 28.75H26.5C27.7375 28.75 28.75 27.5125 28.75 26V6.75C28.75 5.2375 27.7375 4 26.5 4ZM26.5 26H6.25V6.75H26.5V26ZM8.5 20.5H24.25V24.625H8.5V20.5Z"
      />
    </Icon>
  );
};
