import styled from "styled-components";
import ProductsGallery from "/src/components/blocks/product-gallery/product-gallery";

export const StyledBuyPage = styled.div`
  position: absolute;
  top: 80px;
  bottom: 80px;
  display: flex;
  padding: 40px 90px 0px;
  background-color: ${(props) => props.theme.colorWhiteDark};
  overflow: hidden;
`;

export const Wrapper = styled.div`
  max-height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow-y: overlay;
`;

export const StyledProductsGallery = styled(ProductsGallery)`
  /* надо подумать как реализовать и надо ли вообще */
`;
