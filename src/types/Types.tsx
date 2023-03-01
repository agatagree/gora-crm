export type GalleryType = {
  id: string;
  title: string;
  code: string;
  color: string[];
  technique: string;
  year: number;
  availability: string;
  shape: string,
  dimensions: {
    width: number;
    height: number;
  };
  img: {
    cover: string;
    wiz: string;
    zoom: string;
  };
  mainPage: boolean;
  mainPageData: {
    mainPagePosition: number;
    title: string;
    description: string;
    icon: string;
  };
  accepted: boolean;
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