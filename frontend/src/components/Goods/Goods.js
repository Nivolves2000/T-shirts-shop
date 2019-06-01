import React, { useState } from "react";
import PropTypes from "prop-types";

import Good from "./Good";
import Sort from "../Sort/Sort";

import { SORT_OPTIONS } from "../../constants/SortOptions";



import { GoodsContainer, GoodsWrapper } from "./StyledGoods";

const Goods = ( { goods, basket, setBasket } ) => {
  const [ option, setOption ] = useState( SORT_OPTIONS[ 0 ] );


  if ( option === "Highest to lowest" ) {
    goods.sort( ( a, b ) => ( a.price > b.price ) ? -1 : ( a.price === b.price ) ? 1 : 1 );
  } else {
    goods.sort( ( a, b ) => ( a.price > b.price ) ? 1 : ( a.price === b.price ) ? 1 : -1 );
  }



  return (
    <GoodsWrapper>
      <Sort option={option} setOption={setOption} sortOptions={SORT_OPTIONS} />
      <GoodsContainer>
        {goods.map( ( { _id, photo, name, price, size } ) => (
          <Good key={_id} photo={photo} name={name} price={price} size={size} basket={basket} setBasket={setBasket} />
        ) )}
      </GoodsContainer>
    </GoodsWrapper>
  );
}

export default Goods;

Goods.propTypes = {
  goods: PropTypes.array,
  basket: PropTypes.array,
  setBasket: PropTypes.func,
};

Goods.defaultProps = {
  goods: [],
  basket: [],
  setBasket: () => { },
};