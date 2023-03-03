import { CustomModal } from "components";

export const Filtration = ({
  onClose,
  isOpen,
  onClick
}: {
  onClose: () => void;
  onClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <CustomModal
      title={"Filtracja"}
      submitBtnLabel={"Pokaż elementy"}
      onClose={onClose}
      isOpen={isOpen}
      onClick={onClick}
    >
      Work in progress...
    </CustomModal>
  );
};
