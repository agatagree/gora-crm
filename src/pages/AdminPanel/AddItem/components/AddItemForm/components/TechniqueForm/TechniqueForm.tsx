import { forwardRef } from "react";
import { Select } from "@chakra-ui/react";
import { TagFormLayout } from "pages/AdminPanel/AddItem/components";
import { GalleryType } from "types/Types";
import { UseFormRegister } from "react-hook-form";

type TechniqueFormProps = {
  isInvalid?: boolean;
  technique: string[];
  register: UseFormRegister<GalleryType>;
};

export const TechniqueForm = forwardRef<HTMLOptionElement, TechniqueFormProps>(
  (props, ref) => {
    const { technique, isInvalid, register } = props;
    return (
      <TagFormLayout
        inputLabel={"Technika wykonania"}
        inputValue={"technique"}
        isInvalid={isInvalid}
        addNewTag
      >
        <Select placeholder={"-"} aria-invalid={isInvalid ? "true" : "false"}
        {...register("technique", { required: true })}
        >
          {technique.map((item) => (
            <option key={item} value={item} ref={ref}>
              {item}
            </option>
          ))}
        </Select>
      </TagFormLayout>
    );
  }
);
