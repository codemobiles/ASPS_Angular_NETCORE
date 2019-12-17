export class Product {
  productId: number;
  name: string;
  stock: number;
  price: number;
  image: any;
  qty: number;
  created: Date;
}

export interface ResponseProducts {
  result: Product[];
  message: string;
}

export interface ResponseProduct {
  result: Product;
  message: string;
}
