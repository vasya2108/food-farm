import React from "react";

import {
  StyledCard,
  Image,
  Title,
  StyledDescription,
  StyledText,
  StyledPrice
} from "./styles";
import Tabs from "/src/components/ui/tabs/tabs";

function ProductCard({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: (
        <StyledDescription>
          <StyledText>{product.description}</StyledText>
          <StyledPrice>{`${product.price} руб./ ${product.weight} гр.`}</StyledPrice>
        </StyledDescription>
      ),
      isHtml: false
    },
    {
      title: "Характеристики",
      content: product.characteristics,
      isHtml: true
    },
    {
      title: "Свойства",
      content: product.properties,
      isHtml: true
    }
  ];

  return (
    <StyledCard>
      <Image src={product.src} alt={product.title} />
      <div>
        <Title>{product.title}</Title>
        <Tabs tabs={tabs} />
      </div>
    </StyledCard>
  );
}

export default ProductCard;
