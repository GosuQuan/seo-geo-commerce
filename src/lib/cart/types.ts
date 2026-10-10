export type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export const CART_STORAGE_KEY = "trailforge-cart-v1";
