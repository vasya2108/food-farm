import React, { useEffect } from "react";
import { useState } from "react";

import ChooseProducts from "../../blocks/choose-products/choose-products";
import MakeOrder from "/src/components/blocks/make-order/make-order";

import { StyledBuyPage, Wrapper, StyledProductsGallery } from "./styled";

function BuyPage({ products }) {
  const [currentCheckButton, setCurrentCheckButton] = useState(null);
  const [cart, setCart] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    if (currentCheckButton !== null) {
      swiperRef.slideTo(currentCheckButton);
    }
  });

  const onChange = (currentNum) => {
    setCurrentCheckButton(currentNum);

    const index = cart.findIndex((item) => item[0] === currentNum);

    if (index >= 0) {
      const tempCart = [...cart];
      tempCart.splice(index, 1);
      setCart([...tempCart]);
    } else {
      setCart([...cart, [currentNum, products[currentNum]]]);
    }
  };

  return (
    <StyledBuyPage>
      <Wrapper>
        <ChooseProducts
          onChange={onChange}
          products={products}
          currentCheckButton={currentCheckButton}
          cart={cart}
        />
        <MakeOrder cart={cart}></MakeOrder>
      </Wrapper>
      <StyledProductsGallery
        products={products}
        currentSlide={currentCheckButton}
        setSwiperRef={setSwiperRef}
      />
    </StyledBuyPage>
  );
}

export default BuyPage;
