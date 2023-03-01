import { ReactNode } from "react";
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
  inputValue: string;
  addNewTag?: boolean;
};

export const TagFormLayout = ({
  children,
  isInvalid,
  inputLabel,
  inputValue,
  addNewTag,
}: TagFormLayoutTypes) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <FormControl isInvalid={isInvalid}>
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
      {isOpen && (
        <AddTag onClose={onClose} isOpen={isOpen} category={inputValue} />
      )}
    </>
  );
};
