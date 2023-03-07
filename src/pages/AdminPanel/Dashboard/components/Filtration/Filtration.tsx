import { CustomModal } from "components";

export const Filtration = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  return (
    <CustomModal
      title={"Filtracja"}
      onClose={onClose}
      isOpen={isOpen}
    >
      Work in progress...
    </CustomModal>
  );
};
