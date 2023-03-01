import { forwardRef, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormErrorMessage,
  FormHelperText,
  InputRightAddon,
} from "@chakra-ui/react";

type FormInputProps = {
  inputValue: string;
  inputPlaceholder: string;
  inputLabel: string;
  required?: boolean;
  password?: boolean;
  isInvalid?: boolean;
  helperText?: string;
  inputType?: "text" | "password" | "number";
  cm?: boolean;
};

export const InputForm = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      inputValue,
      inputPlaceholder,
      inputLabel,
      required,
      password,
      isInvalid,
      helperText,
      inputType,
      cm,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    if (!inputType) {
      inputType = "text";
    }
    if (show && password) {
      inputType = "text";
    }
    if (!show && password) {
      inputType = "password";
    }
    return (
      <FormControl isRequired={required} isInvalid={!!isInvalid}>
        <FormLabel htmlFor={inputValue}>{inputLabel}</FormLabel>
        <InputGroup>
          <Input
            id={inputValue}
            {...props}
            placeholder={inputPlaceholder}
            ref={ref}
            type={inputType}
            aria-invalid={isInvalid ? "true" : "false"}
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
          {cm && <InputRightAddon children="cm" />}
        </InputGroup>
        {!isInvalid ? (
          <FormHelperText>{helperText}</FormHelperText>
        ) : (
          <FormErrorMessage>
            {isInvalid && `Pole jest wymagane`}
          </FormErrorMessage>
        )}
      </FormControl>
    );
  }
);
