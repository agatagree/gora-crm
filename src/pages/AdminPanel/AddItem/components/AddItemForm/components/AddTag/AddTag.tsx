import { CustomModal } from "components";

type AddTagProps = {
  onClose: () => void;
  isOpen: boolean;
  category: string;
};

export const AddTag = ({ onClose, isOpen, category }: AddTagProps) => {
  return (
    <CustomModal
      title={`Dodaj nowy tag w kategorii: ${category}`}
      submitBtnLabel={"Dodaj"}
      onClose={onClose}
      isOpen={isOpen}
    >
      dodawanei tagow
    </CustomModal>
  );
};
