import { forwardRef, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

type FormInputProps = {
  inputValue: string;
  inputPlaceholder: string;
  inputLabel: string;
  required?: boolean;
  password?: boolean;
};

export const InputForm = forwardRef<HTMLInputElement, FormInputProps>(
  (
    { inputValue, inputPlaceholder, inputLabel, required, password, ...props },
    ref
  ) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    let inputType = "text";
    if (show && password) {
      inputType = "text";
    }
    if (!show && password) {
      inputType = "password";
    }
    return (
      <FormControl isRequired={required}>
        <FormLabel htmlFor={inputValue}>{inputLabel}</FormLabel>
        <InputGroup>
          <Input
            id={inputValue}
            {...props}
            placeholder={inputPlaceholder}
            ref={ref}
            type={inputType}
          />
          {password && (
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                variant="ghost"
              >
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
      </FormControl>
    );
  }
);
