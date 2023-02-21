import { useForm, SubmitHandler } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { Button, Flex, Link, useToast } from "@chakra-ui/react";
import { auth } from "api";
import { AuthorizationEmailPassword, AuthorizationLayout } from "../components";
import { FormData } from "../types/AuthorizationTypes";

export const LoginPage = () => {
  const toast = useToast();
  const { reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data, event?) => {
    event?.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
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
    <AuthorizationLayout header={"Zaloguj się"}>
      <AuthorizationEmailPassword
        onSubmit={onSubmit}
        submitType={"Zaloguj się"}
      />
      <Flex justifyContent={"space-between"}>
        <Link as={RouterLink} to="/register">
          <Button variant="link">Utwórz konto</Button>
        </Link>
        <Link as={RouterLink} to="/passwordRecovery">
          <Button variant="link">Przypomnij hasło</Button>
        </Link>
      </Flex>
    </AuthorizationLayout>
  );
};
