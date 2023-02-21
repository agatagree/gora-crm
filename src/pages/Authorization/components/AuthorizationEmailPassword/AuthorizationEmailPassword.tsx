import { BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { InputForm } from "components/InputForm/InputForm";
import { AuthorizationForm } from "../AuthorizationForm";
import { FormData } from "pages/Authorization/types/AuthorizationTypes";

type SubmitHandlerType = (data: FormData, event?: BaseSyntheticEvent) => void;

export const AuthorizationEmailPassword = ({
  onSubmit,
  submitType,
}: {
  onSubmit: SubmitHandlerType;
  submitType: string;
}) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<FormData>();

  return (
    <AuthorizationForm
      submitForm={handleSubmit(onSubmit)}
      submitBtnType={submitType}
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
      />
    </AuthorizationForm>
  );
};
