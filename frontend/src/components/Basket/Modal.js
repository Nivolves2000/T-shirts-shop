import React, { useState } from "react";
import PropTypes from "prop-types";
import { BASE_PATH } from "../../constants/API";


import { ModalContainer, ModalTextInput, ModalPhoneInput, ModalTotalContainer, ModalButton, ErrorMassage, ModalWrapper, StatusConatiner } from "./StyledBasket";

const Modal = ( { isModalOpen, openModal, total, basket } ) => {
  const [ isNameValid, nameValidator ] = useState( true );
  const [ isPhoneValid, phoneValidator ] = useState( true );
  const [ isEmailValid, emailValidator ] = useState( true );
  const [ nameValue, setNameValue ] = useState( '' );
  const [ phoneValue, setPhoneValue ] = useState( '' );
  const [ emailValue, setEmailValue ] = useState( '' );
  const [ status, setStatus ] = useState( "no-status" );

  function handleSubmit( e ) {
    e.preventDefault();
    if ( nameValue.length <= 1 ) {
      nameValidator( false );
    } else {
      nameValidator( true );
    }

    if ( phoneValue.includes( '_' ) || phoneValue === '' ) {
      phoneValidator( false );
    } else {
      phoneValidator( true );
    }

    if ( !emailValue.includes( "@" && "." ) ) {
      emailValidator( false );
    } else {
      emailValidator( true );
    }

    if ( emailValue.includes( "@" && "." ) && ( ( !phoneValue.includes( '_' ) && phoneValue !== '' ) ) && nameValue.length > 1 && total > 0 ) {
      postData();
    }

  }

  function postData() {
    fetch( `${ BASE_PATH }/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {
        order: {
          name: nameValue,
          email: emailValue,
          phone: phoneValue,
          total,
          basket
        }
      } )
    } )
      .then( ( response ) => setStatus( response.status ) );
  }




  return (
    <ModalWrapper>
      <ModalContainer>
        <svg onClick={() => openModal( !isModalOpen )} className="x-mark" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
        {status === "no-status" ?
          <>
            <form onSubmit={handleSubmit}>
              <ModalTextInput placeholder="Enter name" value={nameValue} onChange={e => setNameValue( e.target.value )} />
              {!isNameValid && <ErrorMassage>It is necessary to fill this field</ErrorMassage>}
              <ModalTextInput placeholder="Enter e-mail" value={emailValue} onChange={e => setEmailValue( e.target.value )} />
              {!isEmailValid && <ErrorMassage>It is necessary to fill this field</ErrorMassage>}
              <ModalPhoneInput placeholder="Enter phone" mask="(999)999-99-99" value={phoneValue} onChange={e => setPhoneValue( e.target.value )} />
              {!isPhoneValid && <ErrorMassage>It is necessary to fill this field</ErrorMassage>}
              <ModalTotalContainer>
                <p className="total">Subtotal</p>
                <p className="total-price">$ {total}</p>
                {total === 0 && <ErrorMassage>You have not ordered anything</ErrorMassage>}
              </ModalTotalContainer>
              <ModalButton type="submit">Checkout</ModalButton>
            </form>
          </>
          :
          <StatusConatiner>
            {status === 200 ?
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="#32CD32" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
                <span className="status-good">
                  Thank you for your order
                </span>
              </> :
              <>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#a94442" d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg> 
              <span className="status-bad">
                  Thank you for your order
              </span>
              </>
            }

          </StatusConatiner>}
      </ModalContainer>
    </ModalWrapper>
  );
}

export default Modal;


Modal.propTypes = {
  total: PropTypes.number,
  openModal: PropTypes.func,
  isModalOpen: PropTypes.bool,
  basket: PropTypes.array,
};

Modal.defaultProps = {
  total: 9.99,
  openModal: () => { },
  isModalOpen: false,
  basket: [],
};

