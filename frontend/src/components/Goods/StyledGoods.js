import styled from 'styled-components';
import media from "../../constants/styled-components";

export const GoodButton = styled.button`
  width: 100%;
  padding: 15px 0;
  border: none;
  background-color: var(--primary-color);
  color: var(--white-color);
  cursor: pointer;
  transition: background-color .35s ease-in-out;

  &:hover {
    background-color: var(--active-color);
  }
`;


export const GoodImage = styled.img`
  height: 330px;
  width: 100%;
`;

export const GoodName = styled.p`
  position: relative;
  height: 40px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:before {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: 20px;
    background-color: var(--active-color);
    content: "";
  }

  ${media.tabletL`
    white-space: normal;
  `}
`;

export const GoodPrice = styled.p`
  font-size: 1.5em;
  font-weight: var(--bold-font-weight);
  text-align: center;

  & > span {
    font-size: var(--primary-font-size);
    font-weight: var(--primary-font-weight);
  }

`;

export const GoodWrapper = styled.div`
  width: 45%;
  padding: 10px;

  ${media.tabletL`
    width: 33%;
    margin-top: 40px;
   `}

   ${media.desktop`
    width: 25%;
   `}
`;

export const GoodsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 30px;
`;

export const GoodsWrapper = styled.div`
  width: 100%;

  ${media.tabletL`
    width: 75%;
  `}
`;


