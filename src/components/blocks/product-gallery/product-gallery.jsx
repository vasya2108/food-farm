import React from "react";
import { SwiperWrapper, StyledSwiper, StyledSlide } from "./styles";
import { Navigation, Scrollbar, Mousewheel } from "swiper";

import ProductCard from "/src/components/ui/product-card/product-card";

import "swiper/css";
import "swiper/css/scrollbar";

function ProductsGallery({ products = [], currentSlide, setSwiperRef }) {
  return (
    <SwiperWrapper>
      <StyledSwiper
        onSwiper={setSwiperRef}
        modules={[Navigation, Scrollbar, Mousewheel]}
        spaceBetween={12}
        direction={"vertical"}
        slidesPerView={"auto"}
        mousewheel={true}
        scrollbar={{ hide: true }}
        loop={true}
      >
        {products.map((product, num) => (
          <StyledSlide key={product.id}>
            <ProductCard product={product} />
          </StyledSlide>
        ))}
      </StyledSwiper>
    </SwiperWrapper>
  );
}

export default ProductsGallery;
