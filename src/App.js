import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  /* to the state we need to pass the initial state, it is false in this case (visible or not) */
  const [cartIsShown, setCartIsShown] = useState(false);

  /* than we need couple of function: click on button and cart will apears */
  const showCartHandler = () =>{
    setCartIsShown(true);
  }
  /* click on button and cart will hides */
  const hideCartHandler = () =>{
    setCartIsShown(false);
  }

  /* now we need dynamic expression which is {} where we will be shown <Cart/> is carIsShown === true */
  /* one button for calling the Cart is on the Header so we need to pass our function to the props
  usin onShownCart and than go to Header and implement the logic from props*/

  /* to close the Cart we should call hide function in the Cart component */
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
