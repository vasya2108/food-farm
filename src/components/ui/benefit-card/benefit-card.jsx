import React from "react";

import { StyledCard, Header, Icon, ProductType, Text } from "./style";

function BenefitCard({ benefits }) {
  return (
    <StyledCard isBad={benefits.isBad}>
      <Header>
        <Icon>{benefits.image}</Icon>
        <ProductType size="body14" isBad={benefits.isBad}>
          {benefits.foodType}
        </ProductType>
        <Text size="body18b">{benefits.title}</Text>
      </Header>
      <Text size="body18">{benefits.text}</Text>
    </StyledCard>
  );
}

export default BenefitCard;
