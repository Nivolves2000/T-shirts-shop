import styled from 'styled-components';
import media from "../../constants/styled-components";

export const Select = styled.div`
  position: relative;
  width: 150px;
  padding: 5px;
  border: 1px solid var(--input-border);
  border-radius: 5px;
  transition: border-color .35s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: var(--primary-color);
  }

  &:after {
    position: absolute;
    top: 13px;
    right: 5px;
    border: 4px solid transparent;
    border-top: 4px solid var(--primary-color);
    content: "";
  }
`;

export const SelectOptions = styled.div`
  position: absolute;
  z-index: 2;
  top: -10px;
  left: -1px;
  display: ${( { isSelectOpen } ) => isSelectOpen ? "block" : "none" };
  width: 170px;
  padding: 5px 0;
  border-radius: 5px;
  background-color: var(--white-color);
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

export const SelectOption = styled.div`
  padding: 5px 10px;

  &:hover {
    background-color: var(--input-border);
  }
`;

export const SortWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 30px;

  ${media.tabletL`
    justify-content: flex-end;
   `}

  & > span {
    margin: auto 10px;
  }
`;