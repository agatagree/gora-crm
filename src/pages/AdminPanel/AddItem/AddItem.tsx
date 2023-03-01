import { useEffect, useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import { categoryCollection, getDataFromSnapshot } from "api";
import { AddItemForm } from "./components";
import { AdminRoutingLayout, AlertMessage, Loader } from "components";
import { onSnapshot } from "firebase/firestore";
import { TagsType } from "types/Types";

export const AddItem = () => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState<TagsType[]>(() => []);

  useEffect(() => {
    const unsubscribe = onSnapshot(categoryCollection, (singleCategory) => {
      setData(getDataFromSnapshot(singleCategory));
      setLoad(false);
    });
    return unsubscribe;
  }, []);

  if (load) {
    return <Loader />;
  }
  return (
    <AdminRoutingLayout>
      {data.length > 0 ? (
        <Box>
          <Text fontSize="2xl" mb={10}>Nowy obraz</Text>
          <AddItemForm data={data}/>
        </Box>
      ) : (
        <AlertMessage message={404} />
      )}
    </AdminRoutingLayout>
  );
};
