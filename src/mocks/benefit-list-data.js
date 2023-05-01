import { ReactComponent as Logo1 } from "/src/assets/logo1.svg";
import { ReactComponent as Logo2 } from "/src/assets/logo2.svg";
import { ReactComponent as Logo3 } from "/src/assets/logo3.svg";
import { ReactComponent as Logo4 } from "/src/assets/logo4.svg";

const benefitListData = [
  {
    id: 0,
    isBad: false,
    foodType: "Фремерские продукты",
    title: "Еда намного вкуснее",
    image: <Logo1 />,
    text:
      "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники"
  },
  {
    id: 1,
    isBad: true,
    foodType: "Магазинные продукты",
    title: "Просроченные продукты",
    image: <Logo2 />,
    text:
      "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара"
  },
  {
    id: 2,
    isBad: false,
    foodType: "Фермерские продукты",
    title: "Натуральные продукты",
    image: <Logo3 />,
    text:
      "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений"
  },
  {
    id: 3,
    isBad: true,
    foodType: "Магазинные продукты",
    title: "Некачественное мясо",
    image: <Logo4 />,
    text:
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов"
  }
];

export default benefitListData;
