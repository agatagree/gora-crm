import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

type AlertType = "info" | "error" ;

const messageVariant = {
  404: {
    alertStatus: "error" as AlertType,
    alertTitle: "Przepraszamy, wystąpił błąd",
    alertDescription: "Spróbuj później."
  },
  underConstruction: {
    alertStatus: "info" as AlertType,
    alertTitle: "Przepraszamy, strona w budowie.",
    alertDescription: ""
  },
  pageNotFound: {
    alertStatus: "error" as AlertType,
    alertTitle: "Ups!",
    alertDescription: "Strona o podanym adresie nie istnieje."
  },
};

type MessageType = {
  message: keyof typeof messageVariant;
}

export const AlertMessage = ({ message } : MessageType) => {
  return (
    <Alert status={messageVariant[message].alertStatus}>
      <AlertIcon />
      <AlertTitle>{messageVariant[message].alertTitle}</AlertTitle>
      <AlertDescription>
        {messageVariant[message].alertDescription}
      </AlertDescription>
    </Alert>
  );
};
