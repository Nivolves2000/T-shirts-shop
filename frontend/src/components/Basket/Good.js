import React from "react";
import PropTypes from "prop-types";


import { GoodContainer, GoodImage, GoodDescriptionContainer, GoodName, GoodSize, GoodPrice } from "./StyledBasket";


export const Good = ( { name, price, photo, size, id, basket, setBasket } ) => (
  <GoodContainer>
    <GoodImage src={photo} alt={name} />
    <GoodDescriptionContainer>
      <GoodName>{name}</GoodName>
      <GoodSize>Size: {size}</GoodSize>
    </GoodDescriptionContainer>
    <GoodPrice>${price}</GoodPrice>
    <svg onClick={() => setBasket( basket.filter( ( good ) => good.id !== id ) )} className="x-mark" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
  </GoodContainer>
);

export default Good;

Good.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  photo: PropTypes.string,
  size: PropTypes.string,
  basket: PropTypes.array,
  setBasket: PropTypes.func,
};

Good.defaultProps = {
  name: "T-shirt",
  price: "10.90",
  id: "7377464446",
  photo: "https://images.ua.prom.st/436675044_w640_h640_men_t_shirt_front_black.jpg",
  size: "L",
  basket: [],
  setBasket: () => { },
};