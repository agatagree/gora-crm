import { galleryCollection } from "api";
import { AlertMessage } from "components";
import { getCountFromServer } from "firebase/firestore";

export const getGalleryIndex = async () => {
  try {
    const snapshot = await getCountFromServer(galleryCollection);
    return snapshot.data().count + 1;
  } catch (error) {
    return <AlertMessage message={404} />;
  }
};
