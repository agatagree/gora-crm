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

type CustomModalProps = {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  children: ReactNode;
};

export const CustomModal = ({
  onClose,
  isOpen,
  title,
  children,
}: CustomModalProps) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior={"inside"}
      closeOnOverlayClick={false}
    >
      <ModalOverlay data-testid="modal-overlay" />
      <ModalContent>
        <ModalHeader mb={12}>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter mt={12}>
          <Button onClick={onClose}>Zamknij</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
