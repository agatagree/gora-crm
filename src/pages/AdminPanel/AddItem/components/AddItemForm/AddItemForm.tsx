import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Flex, useToast } from "@chakra-ui/react";
import { galleryCollection } from "api";
import { GalleryType, TagsType } from "types/Types";
import {
  AvabilityForm,
  TechniqueForm,
  ColorForm,
  ShapeForm,
  ImgUploadSection,
} from "./components";
import { InputForm } from "components";
import { addDoc } from "firebase/firestore";

export type ImgObjType = {
  [key: string]: string;
};

export const AddItemForm = ({ data }: { data: TagsType[] }) => {
  const toast = useToast();
  const [img, setImg] = useState<ImgObjType>();

  const {
    handleSubmit,
    getValues,
    register,
    reset,
    watch,
    formState,
    formState: { errors, isSubmitting },
  } = useForm<GalleryType>();

  const fullTitle = watch(["title", "code"]);

  const submit: SubmitHandler<GalleryType> = (data, event?) => {
    event?.preventDefault();

    if (img && Object.keys(img).length !== 3) {
      toast({
        title: "Proszę dodać wszystkie obrazy",
        status: "warning",
        position: "bottom-left",
        isClosable: true,
        duration: 9000,
      });
      return;
    }

    const colorArr: string[] = getValues("color").map((color) => color);

    const tagsValues = getValues(["technique", "availability", "shape"]);
    const tags = [...tagsValues, ...colorArr];

    const newData = {
      ...data,
      tags,
      img,
    };

    addDoc(galleryCollection, newData)
      .then((_response) => {
        toast({
          title: "Obraz został dodany",
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
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

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
          inputValue={"year"}
          inputPlaceholder={"Podaj rok"}
          inputLabel={"Rok"}
          isInvalid={!!errors.year}
          inputType={"number"}
          required
          {...register("year", {
            required: true,
            valueAsNumber: true,
          })}
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
          register={register}
        />
        <TechniqueForm
          technique={data[0].technique}
          isInvalid={!!errors.technique}
          register={register}
        />
        <ShapeForm
          shape={data[0].shape}
          isInvalid={!!errors.shape}
          register={register}
        />
        <ColorForm
          colors={data[0].color}
          isInvalid={!!errors.color}
          register={register}
        />
        <ImgUploadSection
          fullTitle={fullTitle}
          isInvalid={!!errors.img}
          img={img}
          setImg={setImg}
        />

        <Flex>
          <Button
            mt={4}
            mb={12}
            w={"100%"}
            isLoading={isSubmitting}
            onClick={handleSubmit(submit)}
            type="submit"
          >
            Zatwierdź
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
