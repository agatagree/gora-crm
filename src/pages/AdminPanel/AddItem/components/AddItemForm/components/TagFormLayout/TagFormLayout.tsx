import { ReactNode, memo } from "react";
import { AddIcon } from "@chakra-ui/icons";
import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Button,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { AddTag } from "pages/AdminPanel/AddItem/components";

type TagFormLayoutTypes = {
  children: ReactNode;
  isInvalid?: boolean;
  inputLabel: string;
  inputValue?: string | undefined;
  addNewTag?: boolean;
};

export const TagFormLayout = memo(({
  children,
  isInvalid,
  inputLabel,
  inputValue,
  addNewTag,
}: TagFormLayoutTypes) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <FormControl isRequired isInvalid={isInvalid}>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={2}
        >
          <FormLabel htmlFor={inputValue}>{inputLabel}</FormLabel>
          {addNewTag && (
            <Button
              leftIcon={<AddIcon />}
              variant="ghost"
              size="sm"
              onClick={onOpen}
            >
              Dodaj
            </Button>
          )}
        </Flex>
        {children}
        <FormErrorMessage>{isInvalid && `Pole jest wymagane`}</FormErrorMessage>
      </FormControl>
      {(isOpen && inputValue) && (
        <AddTag onClose={onClose} isOpen={isOpen} category={inputValue} />
      )}
    </>
  );
});
