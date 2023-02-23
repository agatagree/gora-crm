import { Icon, IconProps } from "@chakra-ui/react";

export const AddIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 33 33" color="none" {...props}>
      <path
        d="M26.625 4.125H6.375C5.1375 4.125 4.125 5.3625 4.125 6.875V26.125C4.125 27.6375 5.1375 28.875 6.375 28.875H26.625C27.8625 28.875 28.875 27.6375 28.875 26.125V6.875C28.875 5.3625 27.8625 4.125 26.625 4.125ZM26.625 26.125H6.375V6.875H26.625V26.125Z"
        fill="black"
      />
      <path
        d="M24 17.5714H17.5714V24H15.4286V17.5714H9V15.4286H15.4286V9H17.5714V15.4286H24V17.5714Z"
        fill="black"
      />
    </Icon>
  );
};
