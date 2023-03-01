import { forwardRef } from "react";
import { Select } from "@chakra-ui/react";
import { TagFormLayout } from "pages/AdminPanel/AddItem/components";

type TechniqueFormProps = {
  isInvalid?: boolean;
  technique: string[];
};

export const TechniqueForm = forwardRef<HTMLOptionElement, TechniqueFormProps>(
  (props, ref) => {
    const { technique, isInvalid } = props;
    return (
      <TagFormLayout
        inputLabel={"Technika wykonania"}
        inputValue={"technique"}
        isInvalid={isInvalid}
        addNewTag
      >
        <Select placeholder={"-"} aria-invalid={isInvalid ? "true" : "false"}>
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
