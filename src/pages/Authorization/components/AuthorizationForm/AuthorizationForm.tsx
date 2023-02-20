import { BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
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

type SubmitHandlerType = (data: FormData, event?: BaseSyntheticEvent) => void;

export const AuthorizationForm = ({
  onSubmit, submitType
}: {
  onSubmit: SubmitHandlerType, submitType: string
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection={"column"} gap={10}>
        <FormControl isInvalid={!!errors.email}>
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
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="password">Wpisz hasło</FormLabel>
          <Input
            id="password"
            placeholder="Hasło"
            {...register("password", {
              required: "Pole wymagane",
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} mb={12} isLoading={isSubmitting} type="submit">
          {submitType}
        </Button>
      </Flex>
    </form>
  );
};
