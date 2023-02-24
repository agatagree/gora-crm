import { Icon, IconProps } from "@chakra-ui/react";

export const LogOutIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" color="none" {...props} >
      <path
        fill="black"
        d="M5 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11C11.55 21 12 20.55 12 20C12 19.45 11.55 19 11 19H5V5Z" 
      />
      <path
        fill="black"
        d="M20.65 11.6505L17.86 8.86052C17.54 8.54052 17 8.76052 17 9.21052V11.0005H10C9.45 11.0005 9 11.4505 9 12.0005C9 12.5505 9.45 13.0005 10 13.0005H17V14.7905C17 15.2405 17.54 15.4605 17.85 15.1405L20.64 12.3505C20.84 12.1605 20.84 11.8405 20.65 11.6505Z"
      />
    </Icon>
  );
};
