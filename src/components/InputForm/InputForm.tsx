import { forwardRef } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

type FormInputProps = {
  inputValue: string;
  inputPlaceholder: string;
  inputLabel: string;
  required?: boolean;
};

export const InputForm = forwardRef<HTMLInputElement, FormInputProps>(
  ({ inputValue, inputPlaceholder, inputLabel, required, ...props }, ref) => {
    return (
      <FormControl isRequired={required}>
        <FormLabel htmlFor={inputValue}>{inputLabel}</FormLabel>
        <Input
          id={inputValue}
          {...props}
          placeholder={inputPlaceholder}
          ref={ref}
        />
      </FormControl>
    );
  }
);
