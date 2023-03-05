import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Button, useToast, Flex } from "@chakra-ui/react";
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
      [category]: arrayUnion(
        category === "color"
          ? { name: data.category, color: data.categoryColor }
          : data.category
      ),
    });
    setDoc(
      translateRef,
      {
        EN: {
          [data.category]: data.category,
        },
        PL: {
          [data.category]: data.PL,
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
      <Flex flexDirection={"column"} gap={8}>
        <InputForm
          inputLabel={"Podaj nowy tag w języku ANGIELSKIM:"}
          inputPlaceholder={"tag"}
          isInvalid={!!errors.category}
          helperText={"z małej litery"}
          required
          {...register("category", { required: true })}
        />
        <InputForm
          inputLabel={"Dodaj POLSKIE tłumaczenie:"}
          inputPlaceholder={"właściwość"}
          isInvalid={!!errors.PL}
          helperText={"z małej litery"}
          required
          {...register("PL", { required: true })}
        />
        {category === "color" && (
          <InputForm
            inputLabel={"Wybierz kolor"}
            isInvalid={!!errors.categoryColor}
            inputType={"color"}
            required
            {...register("categoryColor", { required: true })}
          />
        )}

        <Button onClick={handleSubmit(submit)} type="submit">
          Dodaj
        </Button>
      </Flex>
    </CustomModal>
  );
};
