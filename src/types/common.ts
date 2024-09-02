export type TProduct = {
  _id: string;
  quantity: number;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  category: string;
  ratings: number;
  images?: string[];
  isDeleted?: boolean;
};

export type TCustomer={
  name: string;
  email: string;
  address: string;
  contactNo: string;
}

export type TOrderedProduct = {
  productId: string;
  quantity: number;
};

export type TOrderedProducts = {
  name: string;
  email: string;
  address: string;
  contactNo: string;
  totalPrice: number;
  products: TOrderedProduct[];
  clientSecret: string;
  paymentIntent: string;
  paymentMethod: string;
};
