import {
  useState,
  ChangeEvent,
  useEffect,
  useRef,
  memo,
  useCallback,
} from "react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { Button, useToast } from "@chakra-ui/react";
import { storage } from "api/firebase";
import { ImgObjType } from "../../../AddItemForm";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

type ImageUploadProps = {
  title: string[];
  type: string;
  img: ImgObjType | undefined;
  setImg: (value: ImgObjType) => void;
};

export const ImageUpload = memo(
  ({ title, type, setImg, img }: ImageUploadProps) => {
    const toast = useToast();
    const [imgUpload, setImgUpload] = useState<File>();
    const [isLoad, setIsLoad] = useState(false);
    const [imgUrl, setImgUrl] = useState<string>("");

    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setImgUpload(e.target.files[0]);
      }
    }, []);

    useEffect(() => {
      if (imgUrl) {
        setImg({
          ...img,
          [type]: imgUrl,
        });
      }
    }, [imgUrl, img, setImg, type]);

    useEffect(() => {
      if (imgUpload) {
        setIsLoad(true);
        const imgRef = ref(storage, `gallery/${title[0]}-${title[1]}-${type}`);
        uploadBytes(imgRef, imgUpload)
          .then((response) => {
            getDownloadURL(response.ref).then((url) => {
              setImgUrl(url);
            });
            setIsLoad(false);
            toast({
              title: `${type} obraz został dodany`,
              status: "success",
              position: "bottom-left",
              isClosable: true,
              duration: 9000,
            });
          })
          .catch((error) => {
            toast({
              title: `Wystąpił błąd, kod błędu: ${error.code}`,
              description: error.message,
              status: "error",
              position: "bottom-left",
              isClosable: true,
              duration: 9000,
            });
          });
      }
    }, [imgUpload, title, toast, type]);

    return (
      <>
        <Button
          isLoading={isLoad}
          variant="outline"
          onClick={() => inputRef?.current?.click()}
          leftIcon={!imgUrl ? <AddIcon /> : <CheckIcon />}
          size="sm"
          flex={1}
          isDisabled={!title[0] || !title[1]}
        >
          Dodaj obraz typu: {type}
        </Button>
        <input
          type="file"
          id="cover"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          style={{ display: "none" }}
          ref={inputRef}
          required
        />
      </>
    );
  }
);
