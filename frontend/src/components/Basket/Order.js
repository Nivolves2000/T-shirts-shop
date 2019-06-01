import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "./Modal";

import { OrderContainer, TotalContainer, BasketButton } from "./StyledBasket";

export const Order = ( { total, basket } ) => {

  const [ isModalOpen, openModal ] = useState( false );

  return (
    <OrderContainer>
      <TotalContainer>
        <p className="total">Subtotal</p>
        <p className="total-price">$ {total}</p>
      </TotalContainer>
      <BasketButton onClick={() => openModal( !isModalOpen )}>Checkout</BasketButton>
      {isModalOpen && <Modal basket={basket} isModalOpen={isModalOpen} openModal={openModal} total={total} />}
    </OrderContainer>
  );
}

export default Order;

Order.propTypes = {
  total: PropTypes.number,
  basket: PropTypes.array,
};

Order.defaultProps = {
  total: 9.99,
  basket: [],
};

