import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { galleryCollection } from "api";
import {
  AvabilityForm,
  TechniqueForm,
  ColorForm,
  ShapeForm,
} from "./components";
import { InputForm } from "components";
import { addDoc } from "firebase/firestore";
import { GalleryType, TagsType } from "types/Types";

export const AddItemForm = ({ data }: { data: TagsType[] }) => {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<GalleryType>();

  // const { fields, append } = useFieldArray({
  //   control,
  //   name: "color"
  // });

  const handleSave: SubmitHandler<GalleryType> = (data, event?) => {
    event?.preventDefault();
    data.accepted = false;
    console.log(data);
    addDoc(galleryCollection, data)
      .then((_response) => {
        toast({
          title: "Obraz został zapisany",
          status: "success",
          position: "bottom-left",
          isClosable: true,
          duration: 9000,
        });
        reset();
      })
      .catch((error) => {
        toast({
          title: `Zapisanie dokuemntu nie powiodło się, kod błędu: ${error.code}`,
          description: error.message,
          status: "error",
          position: "bottom-left",
          isClosable: true,
          duration: 9000,
        });
      });
  };
  return (
    <form>
      <Flex flexDirection={"column"} gap={10}>
        <InputForm
          inputValue={"title"}
          inputPlaceholder={"Podaj tytuł"}
          inputLabel={"Tytuł"}
          required
          isInvalid={!!errors.title}
          helperText={"Wartość bez kodu numerycznego"}
          {...register("title", { required: true })}
        />
        <InputForm
          inputValue={"code"}
          inputPlaceholder={"Podaj kod"}
          inputLabel={"Kod"}
          isInvalid={!!errors.code}
          required
          {...register("code", { required: true })}
        />
        <InputForm
          inputValue={"dimensions.width"}
          inputPlaceholder={"Podaj szerokość"}
          inputLabel={"Szerokość"}
          isInvalid={!!errors.dimensions?.width}
          inputType={"number"}
          required
          cm
          {...register("dimensions.width", {
            required: true,
            valueAsNumber: true,
          })}
        />
        <InputForm
          inputValue={"dimensions.height"}
          inputPlaceholder={"Podaj wysokość"}
          inputLabel={"Wysokość"}
          isInvalid={!!errors.dimensions?.height}
          inputType={"number"}
          cm
          {...register("dimensions.height", {
            required: true,
            valueAsNumber: true,
          })}
          required
        />
        <AvabilityForm
          availability={data[0].availability}
          isInvalid={!!errors.availability}
          {...register("availability", { required: true })}
        />
        <TechniqueForm
          technique={data[0].technique}
          isInvalid={!!errors.technique}
          {...register("technique", { required: true })}
        />
        <ShapeForm
          shape={data[0].shape}
          isInvalid={!!errors.shape}
          {...register("shape", { required: true })}
        />

        <ColorForm
          colors={data[0].color}
          isInvalid={!!errors.color}
          {...register("color", { required: true })}
        /> 

        <Flex>
          <Button
            mt={4}
            mb={12}
            isLoading={isSubmitting}
            onClick={handleSubmit(handleSave)}
            type="submit"
          >
            Zapisz
          </Button>
          <Button
            mt={4}
            mb={12}
            isLoading={isSubmitting}
            // onClick={handleSubmit(handleAddNew)}
          >
            Dodaj nowy
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
