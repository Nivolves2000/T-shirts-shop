import React, { useState } from "react";
import PropTypes from "prop-types";

import Good from "./Good";

import { BasketWrapper, BasketContainer, CloseBasket, GoodsBasket, BasketImageContainer, BasketImage, Cart, BugImageContainer, CountGoods, GoodsCount, GoodsContainer } from "./StyledBasket";

import Order from "./Order";


const Basket = ( { basket, setBasket } ) => {
  const [ isBasketOpen, openBasket ] = useState( false );

  let total = basket.length && ( basket.reduce( ( total, { price } ) => ( total + price ), 0 ) );

  return (
    <BasketWrapper isBasketOpen={isBasketOpen}>
      <BasketContainer>
        <CloseBasket isBasketOpen={isBasketOpen} onClick={() => { openBasket( !isBasketOpen ); document.getElementsByTagName( 'body' )[ 0 ].classList.toggle( 'fixed' ) }}>
          {isBasketOpen && "X"}
          <GoodsCount isBasketOpen={isBasketOpen} >{basket.length}</GoodsCount>
        </CloseBasket>
      </BasketContainer>
      <GoodsBasket>
        <BasketImageContainer>
          <BugImageContainer>
            <CountGoods>{basket.length}</CountGoods>
            <BasketImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCwwQEgYn7+gWAAABQklEQVRIx9WTsUoDQRRF72xMYSFokcRCjBFESGWRwtZe8AtEFFNrI1bB0tLGQuzs/AJB8AO2kZRCxBiRQNKIoIYoyLFwCZuss9nNgpBXzc7be3j3zow09mU48321zVF8gNtbZ5Q1UwmGYQPIxFU5vnVdUuHfARO+OD5oa9GzM6NcbICkem+CLZ0kA1zKHQ2w6tlpqRUN4AwA5knFiTAISGsuHqDfwoOkgp4kUkoP1WI+Azt02ZYk9hle3cAEBh69c7iKEOJ30IJU/71KpqbaKCH6b0LEGgTcaYXpeIj+GJf54pyI70CSTACxq1M5ehmqvDCHfwIkFrQW4S1WzXUCq+E5lNhkMqSfo0ze3t7hlWeqIfJ3GnQo2n644ZhZYMnSL9OQcKnYAHs0ueUeY+nn6eDyRskGcFjngGxIBkUqVvk41g+oBJ136GBf8AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMS0xMlQxNjoxODowNiswMTowMEVm3zEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTEtMTJUMTY6MTg6MDYrMDE6MDA0O2eNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==" alt="bug" />
          </BugImageContainer>
          <Cart>Cart</Cart>
        </BasketImageContainer>
      </GoodsBasket>
      <GoodsContainer>
        {basket.map( ( { name, price, photo, size, id } ) => (
          <Good key={id} id={id} name={name} price={price} photo={photo} basket={basket} setBasket={setBasket} size={size} />
        ) )}
      </GoodsContainer>
      <Order total={total} basket={basket}/>
    </BasketWrapper>
  );
};

export default Basket;

Basket.propTypes = {
  basket: PropTypes.array,
  setBasket: PropTypes.func,
};