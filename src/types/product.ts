export interface Product {
  id: number;
  title: string;
  price: number;
  discount?: number;
  image: string;
  rating: number;
  reviews: number;
  isPrime?: boolean;
  deliveryInfo: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}
