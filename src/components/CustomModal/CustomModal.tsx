import { ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

export const CustomModal = ({
  onClose,
  isOpen,
  title,
  children,
  submitBtnLabel,
}: {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  children: ReactNode;
  submitBtnLabel: string;
}) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior={"inside"} 
      closeOnOverlayClick={false}
    >
      <ModalOverlay data-testid="modal-overlay" />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>{submitBtnLabel}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
