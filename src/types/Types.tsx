export type MainGalleryTypes = {
  order: number;
  title: string;
  code: string;
  color: string[];
  technique: string;
  year: number;
  availability: string;
  shape: string;
  dimensions: {
    width: number;
    height: number;
  };
  img: {
    cover: string;
  };
};

export interface GalleryType extends MainGalleryTypes {
  id: string;
  mainPage?: boolean;
  mainPageData?: {
    mainPagePosition?: number;
    title?: string;
    description?: string;
    icon?: string;
  };
  tags: string[];
}

export type ColorType = {
  name: string;
  color: string;
};

export type TagsType = {
  id: string;
  color: ColorType[];
  shape: string[];
  availability: string[];
  technique: string[];
};
