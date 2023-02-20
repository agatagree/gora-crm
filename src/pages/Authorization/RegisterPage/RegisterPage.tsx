import { useForm, SubmitHandler } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { auth } from "api";
import { AuthorizationForm, AuthorizationLayout } from "../components";
import { useToast } from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "@firebase/auth";

type FormData = {
  email: string;
  password: string;
};

export const RegisterPage = () => {
  const toast = useToast();
  const { reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data, event?) => {
    event?.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        toast({
          title: `Witaj ${userCredential.user.email}`,
          status: "success",
          position: "bottom-left",
          isClosable: true,
        });
        reset();
      })
      .catch((error) => {
        toast({
          title: error.message,
          status: "error",
          position: "bottom-left",
          isClosable: true,
        });
      });
  };

  return (
    <AuthorizationLayout header={"Zarejestruj się"}>
      <AuthorizationForm onSubmit={onSubmit} submitType={"Zarejestruj się"} />
    </AuthorizationLayout>
  );
};
