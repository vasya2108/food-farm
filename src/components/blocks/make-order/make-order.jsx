import { Wrapper, Title, Input, Text, Price } from "./styles";
import { useState } from "react";

import Button from "/src/components/ui/button/button";

function MakeOrder({ cart }) {
  const [address, setAddress] = useState("");

  let price = 0;
  let goods = [];
  let isDisabled = "true";

  if (cart.length > 0) {
    price = cart.reduce((acc, item) => acc + item[1].price, 0);
    goods = cart.map((item) => item[1].title);
    address.length > 0 ? (isDisabled = "false") : (isDisabled = "true");
  }

  const order = `Вы заказали:  ${goods.join(", ")}  на сумму ${price} рублей.`;

  return (
    <Wrapper>
      <Title>Сделать заказ</Title>
      <Input
        placeholder="Ведите адрес доставки"
        type="text"
        value={address}
        onChange={(evt) => setAddress(evt.target.value)}
      ></Input>
      <Text>Цена</Text>
      <Price>{price} руб.</Price>
      <Button
        isDisabled={isDisabled}
        onClick={() => {
          alert(order);
        }}
      >
        Купить
      </Button>
    </Wrapper>
  );
}

export default MakeOrder;
