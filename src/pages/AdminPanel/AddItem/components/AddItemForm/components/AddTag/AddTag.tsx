import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Button, useToast } from "@chakra-ui/react";
import { categoryRef, translateRef } from "api";
import { CustomModal, InputForm } from "components";
import { arrayUnion, setDoc, updateDoc } from "firebase/firestore";

type AddTagProps = {
  onClose: () => void;
  isOpen: boolean;
  category: string;
};

export const AddTag = ({ onClose, isOpen, category }: AddTagProps) => {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submit: SubmitHandler<FieldValues> = (data, event?) => {
    event?.preventDefault();

    updateDoc(categoryRef, {
      shape: arrayUnion(data.shape),
    });
    setDoc(
      translateRef,
      {
        EN: {
          [data.shape]: data.shape,
        },
        PL: {
          [data.shape]: data.PL,
        },
      },
      { merge: true }
    )
      .then((_response) => {
        toast({
          title: "Tag został dodany",
          status: "success",
          position: "bottom-left",
          isClosable: true,
          duration: 9000,
        });
      })
      .catch((error) => {
        toast({
          title: `Wystąpił błąd, kod błędu: ${error.code}`,
          description: error.message,
          status: "error",
          position: "bottom-left",
          isClosable: true,
          duration: 9000,
        });
      });
    if (isSubmitSuccessful) {
      reset();
    }
  };

  return (
    <CustomModal
      title={`Dodaj nowy tag w kategorii: ${category}`}
      onClose={onClose}
      isOpen={isOpen}
    >
      <InputForm
        inputLabel={"Podaj nowy tag w języku angielskim:"}
        inputPlaceholder={"tag"}
        isInvalid={!!errors.category}
        required
        {...register(category, { required: true })}
      />

      <InputForm
        inputLabel={"Dodaj polskie tłumaczenie:"}
        inputPlaceholder={"tag"}
        isInvalid={!!errors.category}
        required
        {...register("PL", { required: true })}
      />

      <Button onClick={handleSubmit(submit)} type="submit">
        Dodaj
      </Button>
    </CustomModal>
  );
};
