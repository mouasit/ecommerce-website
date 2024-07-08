import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../App";

export default function ThankYou() {
  const shoppingCartContext = useContext(ShoppingCartContext);
  useEffect(() => {
    shoppingCartContext.setShoppingCart([]);
  }, []);
  return <div>thank you</div>;
}
