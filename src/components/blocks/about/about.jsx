import React from "react";
import Title from "/src/components/ui/title/title";
import Text from "/src/components/ui/text/text";

import { StyledSection } from "./style";
import { TextWrapper } from "./style";

function About() {
  return (
    <StyledSection>
      <TextWrapper>
        <Title level="1" $gapBottom="20">
          Магазин фермерских продуктов с доставкой
        </Title>
        <Text size="body18">
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;
