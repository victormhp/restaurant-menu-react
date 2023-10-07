export interface Dish {
  category: string;
  name: string;
  price: string;
  description?: string;
  image: string;
  imageDialog?: string;
}

export type MenuCategories = Record<string, HTMLElement | null>;
