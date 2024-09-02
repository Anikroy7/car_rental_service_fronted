import { TCustomer, TOrderedProduct, TProduct } from "../types";

const useGetOrderInfo = (
  userInfo: TCustomer,
  clientSecret: string,
  cartItems: TProduct[]
) => {
  let totalPrice = 0;
  const orderedProducts: TOrderedProduct[] = [];

  cartItems.map((item) => {
    orderedProducts.push({
      productId: item._id,
      quantity: item.quantity,
    });
  });
  totalPrice = cartItems.reduce((acc, curr) => {
    acc += curr.price * curr.quantity;
    return acc;
  }, 0);
  const orderData = {
    ...userInfo,
    products: orderedProducts,
    totalPrice,
    clientSecret,
  };

  return orderData;
};

export default useGetOrderInfo;
