export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  category: string;
  description?: string;
  etsyUrl?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
}