import { useForm, SubmitHandler } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useToast, Link, Button } from "@chakra-ui/react";
import { auth } from "api";
import { AuthorizationEmailPassword, AuthorizationLayout } from "../components";
import { FormData } from "../types/AuthorizationTypes";

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
      <AuthorizationEmailPassword
        onSubmit={onSubmit}
        submitType={"Zarejestruj się"}
      />
      <Link as={RouterLink} to="/">
        <Button variant="link">Możesz się też zalogować</Button>
      </Link>
    </AuthorizationLayout>
  );
};
