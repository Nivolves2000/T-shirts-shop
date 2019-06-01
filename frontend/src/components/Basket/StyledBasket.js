import styled from 'styled-components';
import media from "../../constants/styled-components";
import InputMask from 'react-input-mask';



export const BasketWrapper = styled.div`
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  transform: translateX(${( { isBasketOpen } ) => isBasketOpen ? 0 : "100%" });
  transition: ease-in-out .35s;

  ${media.tablet`
    left: auto;
    right: 0;
    width: 450px;
  `}
`;

export const BasketContainer = styled.div`
  position: relative;
`;

export const BasketImage = styled.img`
  position: relative;
  width: 100%;
  height: auto;
`;

export const BugImageContainer = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
`;

export const BasketImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const GoodsBasket = styled.div`
  margin-top: 30px;
  overflow: auto;
`;

export const CloseBasket = styled.div`
  position: absolute;
  top: 0;
  z-index: 3;
  left: ${( { isBasketOpen } ) => isBasketOpen ? 0 : "-60px" };
  height: 60px;
  width: 60px;
  padding-top: 15px;
  background-color: var(--primary-color);
  background-image: ${( { isBasketOpen } ) => isBasketOpen ? "none" : 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCwwQEgYn7+gWAAABQklEQVRIx9WTsUoDQRRF72xMYSFokcRCjBFESGWRwtZe8AtEFFNrI1bB0tLGQuzs/AJB8AO2kZRCxBiRQNKIoIYoyLFwCZuss9nNgpBXzc7be3j3zow09mU48321zVF8gNtbZ5Q1UwmGYQPIxFU5vnVdUuHfARO+OD5oa9GzM6NcbICkem+CLZ0kA1zKHQ2w6tlpqRUN4AwA5knFiTAISGsuHqDfwoOkgp4kUkoP1WI+Azt02ZYk9hle3cAEBh69c7iKEOJ30IJU/71KpqbaKCH6b0LEGgTcaYXpeIj+GJf54pyI70CSTACxq1M5ehmqvDCHfwIkFrQW4S1WzXUCq+E5lNhkMqSfo0ze3t7hlWeqIfJ3GnQo2n644ZhZYMnSL9OQcKnYAHs0ueUeY+nn6eDyRskGcFjngGxIBkUqVvk41g+oBJ136GBf8AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMS0xMlQxNjoxODowNiswMTowMEVm3zEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTEtMTJUMTY6MTg6MDYrMDE6MDA0O2eNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==")' };
  background-repeat: no-repeat;
  background-position: 50%;
  color: var(--white-color);
  font-size: var(--big-font-size);
  text-align: center;
  cursor: pointer;

  ${media.tablet`
    left: -60px;
  `}
`;

export const Cart = styled.span`
  margin: auto 20px;
  color: var(--white-color);
  font-size: 1.2em;
`;

export const CountGoods = styled.div`
  position: absolute;
  z-index: 4;
  bottom: 0;
  right: 0;
  width: 18px;
  height: 18px;
  padding-top: 2px;
  border-radius: 50%;
  background-color: var(--active-color);
  color: var(--primary-color);
  font-size: var(--small-font-size);
`;

export const GoodsCount = styled.div`
  position: absolute;
  bottom: 5px;
  right: 7px;
  display: ${( { isBasketOpen } ) => isBasketOpen ? "none" : "block" };
  width: 18px;
  height: 18px;
  padding-top: 2px;
  border-radius: 50%;
  background-color: var(--active-color);
  color: var(--primary-color);
  font-size: var(--small-font-size);
`;

export const GoodsContainer = styled.div`
  position: relative;
  height: calc(100% - 275px);
  padding: 10px 20px;
  margin-top: 20px;
  overflow: auto;
`;

export const GoodContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 2px solid rgba(0,0,0,.2);
`;

export const GoodImage = styled.img`
  height: 90px;
  width: 60px;
`;

export const GoodDescriptionContainer = styled.div`
  padding: 10px;
`

export const GoodName = styled.p`
  color: var(--white-color);
`;

export const GoodSize = styled.p`
  color: var(--input-border);
  font-size: var(--small-font-size);
`;

export const GoodPrice = styled.p`
  color: var(--active-color);
  line-height: 50px;
`;

export const OrderContainer = styled.div`
  position: absolute;
  height: 200px;
  width: 100%;
  margin: 0;
  text-align: center;

  &:before {
    position: absolute;
    top: -20px;
    left: 0;
    display: block;
    width: 100%;
    height: 20px;
    background: linear-gradient(0deg,rgba(0,0,0,.2),transparent);
    content: "";
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 10px;

  & > .total {
    display: flex;
    margin: auto 0;
    color: var(--input-border);
    text-transform: uppercase;
  }

  & > .total-price {
    color: var(--active-color);
    font-size: var(--medium-font-size);
    text-transform: uppercase;
  }
`;

export const BasketButton = styled.button`
  width: 80%;
  padding: 15px;
  border: none;
  background-color: var(--button-black-color);
  color: var(--white-color);
  font-size: 1.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color .35s ease-in-out;

  &:hover {
    background-color: var(--black-color)
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: var(--modal-bg);
`;

export const ModalContainer = styled.div`
  position: relative;
  height: 390px;
  width: 70%;
  max-width: 400px;
  padding: 20px 30px;
  margin: 50px auto;
  background-color: var(--white-color);

  & > .x-mark {
    position: absolute;
    right: 10px;
    top: 10px;
    & > path {
      fill: var(--button-black-color);
      
      &:hover {
        fill: var(--black-color);
      }
    }
  }
`;

export const ModalTextInput = styled.input.attrs( {
  type: 'text',
} )`
  display: block;
  width: 100%;
  padding: 7px;
  border: 1px solid var(--input-border);
  border-radius: 5px;
  margin-top: 20px;
  font-size: var(--small-font-size);

  &:first-child {
    margin-top: 40px;
  }

  &:focus {
    border: 1px solid var(--black-color);
  }
`;

export const ModalPhoneInput = styled( InputMask )`
  display: block;
  width: 100%;
  padding: 7px;
  border: 1px solid var(--input-border);
  border-radius: 5px;
  margin-top: 20px;
  font-size: var(--small-font-size);

  &:focus {
    border: 1px solid var(--black-color);
  }
`;

export const ModalTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  & > .total {
    display: flex;
    margin: auto 0;
    color: var(--black-color);
    text-transform: uppercase;
  }

  & > .total-price {
    color: var(--active-color);
    font-size: var(--medium-font-size);
    text-transform: uppercase;
  }
`;

export const ModalButton = styled.button`
  width: 100%;
  padding: 15px 0;
  border: none;
  background-color: var(--primary-color);
  color: var(--white-color);
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color .35s ease-in-out;

  &:hover {
    background-color: var(--active-color);
  }
`;

export const ErrorMassage = styled.span`
  display: block;
  margin-top: 3px;
  color: var(--error-color);
  font-size: var(--error-font-size);
  text-align: left;
`;

export const StatusConatiner = styled.div`
  width: 100%;

  & > svg {
    margin: 50px auto;
  }

  & > .status-good {
    display: block;
    color: var(--good-status-color);
    text-align: center
  }

  & > .status-bad {
    display: block;
    color: var(--error-color);
    text-align: center
  }
`;
