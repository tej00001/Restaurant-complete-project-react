import Header from "./Components/Layout/Header";
import React, { Fragment, useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
