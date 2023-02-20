import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthorizationLayout } from "../components";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

type FormData = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (values) => {
    return console.log(values);
  };

  return (
    <AuthorizationLayout header={"Zaloguj się"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection={"column"} gap={10}>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Adres e-mail</FormLabel>
            <Input
              id="email"
              placeholder="E-mail"
              {...register("email", {
                required: "Pole wymagane",
                minLength: { value: 8, message: "Minimum 8 znaków" },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="password">Wpisz hasło</FormLabel>
            <Input
              id="password"
              placeholder="Hasło"
              {...register("email", {
                required: "Pole wymagane",
                minLength: { value: 8, message: "Minimum 8 znaków" },
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button mt={4} mb={12} isLoading={isSubmitting} type="submit">
            Zaloguj się
          </Button>
        </Flex>
      </form>
      <Flex justifyContent={"space-between"}>
        <Button variant="link">Utwórz konto</Button>
        <Button variant="link">Przypomnij hasło</Button>
      </Flex>
    </AuthorizationLayout>
  );
};
