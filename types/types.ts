export interface Product {
  id: string;
  category: string;
  filter: string;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity?: number;
}
export interface Links {
  href: string;
  label: string;
  image: string;
}

export interface CartProduct {
  id: string;
  category: string;
  filter: string;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}
