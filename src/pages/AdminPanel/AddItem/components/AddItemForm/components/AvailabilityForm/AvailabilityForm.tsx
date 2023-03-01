import { forwardRef } from "react";
import { Select, FormErrorMessage } from "@chakra-ui/react";
import { TagFormLayout } from "pages/AdminPanel/AddItem/components";

type AvabilityFormProps = {
  isInvalid: boolean;
  availability: string[];
};

export const AvabilityForm = forwardRef<HTMLOptionElement, AvabilityFormProps>(
  (props, ref) => {
    const { availability, isInvalid } = props;
    return (
      <TagFormLayout
        inputLabel={"Dostępność produktu"}
        inputValue={"availability"}
        isInvalid={isInvalid}
      >
        <Select placeholder={"-"} aria-invalid={isInvalid ? "true" : "false"}>
          {availability.map((item) => (
            <option key={item} value={item} ref={ref}>
              {item}
            </option>
          ))}
        </Select>
        <FormErrorMessage>{isInvalid && "error check"}</FormErrorMessage>
      </TagFormLayout>
    );
  }
);
