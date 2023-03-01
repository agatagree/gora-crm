import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { Button, Link, useToast } from "@chakra-ui/react";
import { auth } from "api";
import { AuthorizationLayout, AuthorizationForm } from "../components";
import { FormData } from "../types/AuthorizationTypes";
import { InputForm } from "components";
import { AuthContext } from "provider/AuthProvider";

export const LoginPage = () => {
  const toast = useToast();
  const {
    reset,
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<FormData>();
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data, event?) => {
    event?.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        setUser(data.email);
        navigate("/dashboard");
        reset();
      })
      .catch((error) => {
        toast({
          title: error.message,
          status: "error",
          position: "bottom-left",
          isClosable: true,
          duration: 9000,
        });
      });
  };

  return (
    <AuthorizationLayout header={"Zaloguj się"}>
      <AuthorizationForm
        submitForm={handleSubmit(onSubmit)}
        submitBtnType={"Zaloguj się"}
        loadWhenSubmitting={isSubmitting}
      >
        <InputForm
          inputValue={"email"}
          inputPlaceholder={"Podaj adres e-mail"}
          inputLabel={"E-mail"}
          {...register("email")}
          required
        />
        <InputForm
          inputValue={"password"}
          inputPlaceholder={"Podaj hasło"}
          inputLabel={"Hasło"}
          {...register("password")}
          required
          password
        />
      </AuthorizationForm>
      <Link as={RouterLink} to="/passwordRecovery">
        <Button variant="link">Przypomnij hasło</Button>
      </Link>
    </AuthorizationLayout>
  );
};
