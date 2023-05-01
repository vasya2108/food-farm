import React from "react";
import Title from "/src/components/ui/title/title";
import BenefitCard from "/src/components/ui/benefit-card/benefit-card.jsx";
import Button from "/src/components/ui/button/button";
import { StyledSection, StyledList, StyledListItem } from "./style";
import { appRoute } from "/src/mocks/url";
function BenefitList({ benefits }) {
  return benefits?.length ? (
    <>
      <StyledSection>
        <Title level="2">Почему фермерские продукты лучше?</Title>
        <StyledList>
          {benefits.map((item) => (
            <StyledListItem key={item.id}>
              <BenefitCard benefits={item} />
            </StyledListItem>
          ))}
        </StyledList>
        <Button link={appRoute.BUY}>Купить</Button>
      </StyledSection>
    </>
  ) : (
    <div>данные не пришли</div>
  );
}

export default BenefitList;
