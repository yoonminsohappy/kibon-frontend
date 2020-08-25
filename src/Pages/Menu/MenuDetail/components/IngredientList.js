import React, { Component } from "react";
import IngredientCard from "./IngredientCard";

class IngredientList extends Component {
  render() {
    return (
      <div className="IngredientList">
        {productList.map((el) => {
          return (
            <IngredientCard
              image={el.image}
              point={el.point}
              name={el.name}
              text={el.text}
            />
          );
        })}
      </div>
    );
  }
}

export default IngredientList;

//최상단 component에서 전체 data 받은 후, 해당 component에서 필요한 data만 받는다. 
//즉, 자식 component에서는 data가 바뀌는게 아니라 고정되어 있기 때문에 state가 아닌 const로 설정해주자!

const productList = [
  {
    image: "/Images/ingre1.png",
    point: "타우린과 비타민",
    name: "전복",
    text:
      "피로회복과 면역력 강화에 좋은<br /> 타우린과 비타민 B군이 풍부한 전복.<br /> 바다의 산삼이라고 불릴 만큼 건강 식재료로 유명합니다.<br />바다의 향까지 그대로 품어 풍미까지 가득한 한 그릇.<br />풍부한 맛과 향을 푹 우려내었습니다.",
  },
  {
    image: "/Images/ingre2.png",
    point: "부드러운",
    name: "닭고기",
    text:
      "푹 고아 부드럽고 진한 국내산 닭고기는<br />  깊은 맛의 비결입니다.<br /> 특히 단백질이 풍부한 닭 가슴살 부위를 사용해<br /> 느끼한 기름기는 걷어내고 담백함과 고소함을 더했습니다.<br /> 속 깊은 곳까지 편안히,<br />  포근하고 따뜻한 맛을 즐겨보세요.",
  },
  {
    image: "/Images/ingre3.png",
    point: "지친 몸에 활력을",
    name: "수삼, 대추",
    text:
      "원기 보강 대표 한약재, 국내산 수삼 한 뿌리가 통째로!<br />대추와 함께 풍부한 영양을 더했습니다.<br />활력과 입맛을 돋우는 영양식 재료의 탁월한 궁합으로<br />활기찬 하루를 맞이해보세요.<br /> 지치는 삼복더위에도 으슬으슬 힘 빠지는 매서운 추위에도<br />든든한 온기를 전합니다.",
  },
];
