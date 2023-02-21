import { useForm, SubmitHandler } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { sendPasswordResetEmail } from "@firebase/auth";
import { useToast, Link, Button } from "@chakra-ui/react";
import { auth } from "api";
import { AuthorizationForm, AuthorizationLayout } from "../components";
import { EmailData } from "../types/AuthorizationTypes";
import { InputForm } from "components";

export const PasswordRecovery = () => {
  const toast = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<EmailData>();

  const onSubmit: SubmitHandler<EmailData> = (data, event?) => {
    event?.preventDefault();
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        toast({
          title: "Reset link wysłany na podany adres",
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
    <AuthorizationLayout header={"Przypomnij hasło"}>
      <AuthorizationForm
        submitForm={handleSubmit(onSubmit)}
        submitBtnType={"Szukaj"}
        loadWhenSubmitting={isSubmitting}
      >
        <InputForm
          inputValue={"email"}
          inputPlaceholder={"Podaj adres e-mail"}
          inputLabel={"E-mail"}
          {...register("email")}
          required
        />
      </AuthorizationForm>
      <Link as={RouterLink} to="/">
        <Button variant="link">Wróć do logowania</Button>
      </Link>
    </AuthorizationLayout>
  );
};
