import { db } from "./firebase";
import { collection, doc } from "firebase/firestore";

export const urlStorage =
  "https://firebasestorage.googleapis.com/v0/b/gora-b0bf3.appspot.com/o/img%2F";

export const collectionGallery = "gallery";
export const galleryCollection = collection(db, collectionGallery);
export const singleArtCollection = (docId) => doc(db, collectionGallery, docId);

export const collectionTranslations = "/translate";
export const translationCollection = collection(db, collectionTranslations);
export const translateRef = doc(db, "translate", "aU1UHbflHpRNcqhiEwJm");

export const collectionCategory = "/category";
export const categoryCollection = collection(db, collectionCategory);
export const categoryRef = doc(db, "category", "ryArkQ5SyJugx72ClM9P");

export const collectionBanner = "banner";
export const bannerStorage = "/banner";
export const bannerCollection = collection(db, collectionBanner);

export const galleryStorage = "/img";
