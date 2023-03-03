import { forwardRef } from "react";
import { Select } from "@chakra-ui/react";
import { TagFormLayout } from "pages/AdminPanel/AddItem/components";
import { GalleryType } from "types/Types";
import { UseFormRegister } from "react-hook-form";

type ShapeFormProps = {
  isInvalid: boolean;
  shape: string[];
  register: UseFormRegister<GalleryType>;
};

export const ShapeForm = forwardRef<HTMLOptionElement, ShapeFormProps>(
  (props, ref) => {
    const { shape, isInvalid, register } = props;
    return (
      <TagFormLayout
        inputLabel={"Forma"}
        inputValue={"shape"}
        isInvalid={isInvalid}
        addNewTag
      >
        <Select placeholder={"-"} aria-invalid={isInvalid ? "true" : "false"} {...register("shape", { required: true })} >
          {shape.map((item) => (
            <option key={item} value={item} ref={ref}>
              {item}
            </option>
          ))}
        </Select>
      </TagFormLayout>
    );
  }
);
