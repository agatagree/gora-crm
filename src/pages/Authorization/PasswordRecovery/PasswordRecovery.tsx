import { useForm, SubmitHandler } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { sendPasswordResetEmail } from "@firebase/auth";
import {
  useToast,
  Link,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { auth } from "api";
import { AuthorizationLayout } from "../components";
import { EmailData } from "../types/AuthorizationTypes";

export const PasswordRecovery = () => {
  const toast = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection={"column"} gap={10}>
          <FormControl isRequired isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Adres e-mail</FormLabel>
            <Input
              id="email"
              placeholder="E-mail"
              {...register("email", {
                required: "Pole wymagane",
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <Button mt={4} mb={12} isLoading={isSubmitting} type="submit">
            Szukaj
          </Button>
        </Flex>
      </form>
      <Link as={RouterLink} to="/">
        <Button variant="link">Wróć do logowania</Button>
      </Link>
    </AuthorizationLayout>
  );
};
