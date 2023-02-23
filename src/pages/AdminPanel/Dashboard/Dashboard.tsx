import { useEffect, useState } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { galleryCollection, getDataFromSnapshot } from "api";
import { DataTable, DashboardNav, Filtration } from "./components";
import { AlertMessage, Loader } from "components";
import { onSnapshot } from "firebase/firestore";
import { GalleryType } from "types/Types";

export const Dashboard = () => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState<GalleryType[]>(() => []);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onSnapshot(galleryCollection, (singleArt) => {
      setData(getDataFromSnapshot(singleArt));
      setLoad(false);
    });
  }, [load]);

  if (load) {
    return <Loader />;
  }
  return (
    <>
      {data.length > 0 ? (
        <Flex flexDirection={"column"}>
          <DashboardNav onOpen={onOpen} />
          <DataTable data={data} />
          {isOpen && <Filtration onClose={onClose} isOpen={isOpen} />}
        </Flex>
      ) : (
        <AlertMessage message={404} />
      )}
    </>
  );
};
