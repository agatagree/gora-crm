import { CustomModal, InputForm } from "components";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Button, Flex, useToast } from "@chakra-ui/react";
import { categoryCollection } from "api";
import { TagsType } from "types/Types";
import { addDoc } from "firebase/firestore";

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
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const submit: SubmitHandler<FieldValues> = (data, event?) => {
    event?.preventDefault()

    addDoc(categoryCollection, data)
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
      submitBtnLabel={"Dodaj"}
      onClose={onClose}
      isOpen={isOpen}
      onClick={handleSubmit(submit)}
    >
      <InputForm
        inputPlaceholder={"Podaj nowy tag"}
        {...register(category, { required: true })}
      />
    </CustomModal>
  );
};
