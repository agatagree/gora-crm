import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import { Select} from "@chakra-ui/react";
import { TagFormLayout } from "pages/AdminPanel/AddItem/components";
import { GalleryType } from "types/Types";

type AvabilityFormProps = {
  isInvalid: boolean;
  availability: string[];
  register: UseFormRegister<GalleryType>;
};

export const AvabilityForm = forwardRef<HTMLOptionElement, AvabilityFormProps>(
  (props, ref) => {
    const { availability, isInvalid, register } = props;
    return (
      <TagFormLayout
        inputLabel={"Dostępność produktu"}
        inputValue={"availability"}
        isInvalid={isInvalid}
      >
        <Select
          placeholder={"-"}
          aria-invalid={isInvalid ? "true" : "false"}
          {...register("availability", { required: true })}
          
        >
          {availability.map((item) => (
            <option key={item} value={item} ref={ref}>
              {item}
            </option>
          ))}
        </Select>
      </TagFormLayout>
    );
  }
);
