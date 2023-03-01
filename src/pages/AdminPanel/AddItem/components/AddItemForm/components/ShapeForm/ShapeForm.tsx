import { forwardRef } from "react";
import { Select } from "@chakra-ui/react";
import { TagFormLayout } from "pages/AdminPanel/AddItem/components";

type ShapeFormProps = {
  isInvalid: boolean;
  shape: string[];
};

export const ShapeForm = forwardRef<HTMLOptionElement, ShapeFormProps>(
  (props, ref) => {
    const { shape, isInvalid } = props;
    return (
      <TagFormLayout
        inputLabel={"Forma"}
        inputValue={"shape"}
        isInvalid={isInvalid}
        addNewTag
      >
        <Select placeholder={"-"} aria-invalid={isInvalid ? "true" : "false"}>
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
