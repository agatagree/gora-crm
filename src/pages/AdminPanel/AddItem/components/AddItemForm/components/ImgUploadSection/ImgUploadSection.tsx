import { Flex } from "@chakra-ui/react";
import { ImgObjType } from "../../AddItemForm";
import { TagFormLayout } from "../TagFormLayout/TagFormLayout";
import { ImageUpload } from "./ImageUpload";

const imgType = ["cover", "wiz", "zoom"];

type ImgUploadSectionProps = {
  fullTitle: string[];
  isInvalid: boolean;
  img: ImgObjType | undefined;
  setImg: (value: ImgObjType) => void;
};

export const ImgUploadSection = ({
  fullTitle,
  isInvalid,
  img,
  setImg
}: ImgUploadSectionProps) => {
  return (
    <TagFormLayout inputLabel={"Wybór zdjęć"} isInvalid={isInvalid}>
      <Flex justifyContent={"space-between"} gap={5}>
        {imgType.map((type) => (
          <ImageUpload
            key={type}
            title={fullTitle}
            type={type}
            setImg={setImg}
            img={img}
          />
        ))}
      </Flex>
    </TagFormLayout>
  );
};
