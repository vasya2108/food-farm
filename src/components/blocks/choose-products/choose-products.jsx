import { Wrapper, Title, Option, ChooseOptions, OptionText } from "./styles";
import CheckButton from "/src/components/ui/check-button/check-button";

function ChooseProducts({ products, onChange, currentCheckButton, cart }) {
  return (
    <Wrapper>
      <Title>Выберите продукты</Title>
      <ChooseOptions>
        {products.map((item, num) => (
          <Option key={item.id}>
            <OptionText>{item.title}</OptionText>
            <CheckButton
              {...item}
              isChecked={cart.findIndex((item) => item[0] === num) >= 0}
              isCurrent={num === currentCheckButton}
              currentCheckButton={currentCheckButton}
              onChange={onChange}
              checkButtonNum={num}
            />
          </Option>
        ))}
      </ChooseOptions>
    </Wrapper>
  );
}

export default ChooseProducts;
