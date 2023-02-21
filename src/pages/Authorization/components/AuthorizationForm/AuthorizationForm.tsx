import { ReactNode, FormEventHandler } from "react";
import { Flex, Button } from "@chakra-ui/react";

type LayoutTypes = {
  children: ReactNode;
  submitBtnType: string;
  submitForm: FormEventHandler<HTMLFormElement>;
  loadWhenSubmitting: boolean;
};

export const AuthorizationForm = ({
  children,
  submitBtnType,
  submitForm,
  loadWhenSubmitting,
}: LayoutTypes) => {
  return (
    <form onSubmit={submitForm}>
      <Flex flexDirection={"column"} gap={10}>
        {children}
        <Button mt={4} mb={12} isLoading={loadWhenSubmitting} type="submit">
          {submitBtnType}
        </Button>
      </Flex>
    </form>
  );
};
