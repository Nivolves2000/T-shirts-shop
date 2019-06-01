import React from "react";
import PropTypes from "prop-types";


import { GoodWrapper, GoodName, GoodImage, GoodPrice, GoodButton } from "./StyledGoods";


const Good = ( { photo, name, price, basket, setBasket, size } ) => {



  let pennies = () => {
    return String( ( price % 1 ).toFixed( 2 ) ).slice( 2, 4 );
  }
  const wholePart = Math.trunc( price );

  return (
    <GoodWrapper>
      <GoodImage src={photo} alt={name} />
      <GoodName>{name}</GoodName>
      <GoodPrice><span>$</span>{wholePart},<span>{pennies()}</span></GoodPrice>
      <GoodButton onClick={() => setBasket([...basket, {name, price, photo, size, id: new Date().getTime()}])}>Add to cart</GoodButton>
    </GoodWrapper>
  );
}

export default Good;

Good.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  size: PropTypes.string,
  basket: PropTypes.array,
  setBasket: PropTypes.func,
};

Good.defaultProps = {
  photo: "https://images.ua.prom.st/436675044_w640_h640_men_t_shirt_front_black.jpg",
  name: "T-shirt",
  price: 9.99,
  size: "XXXL",
  basket: [],
  setBasket: () => { },
};