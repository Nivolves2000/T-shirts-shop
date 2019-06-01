import styled from 'styled-components';
import media from "../../constants/styled-components";


export const SizesWrapper = styled.div`
  width: 100%;
  padding: 20px;

  ${media.tabletL`
    width: 25%;
    padding: 10px;
    margin-top: 45px;
  `}

  ${media.tabletL`
    width: 25%;
    padding: 0;
  `}

  ${media.desktop`
    width: 15%;
  `}
`;

export const SizesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media.tabletL`
    justify-content: flex-start;
  `}
`;

export const Size = styled.div`
  height: 35px;
  width: 35px;
  padding-top: 11px;
  border-radius: 50%;
  background-color: ${( { checkSize } ) => checkSize ? "var(--input-border)" : "var(--primary-color)" };
  color: ${( { checkSize } ) => checkSize ? "var(--primary-color)" : "var(--white-color)" };
  font-size: .7em;
  text-align: center;
  cursor: pointer;

  ${media.tabletL`
    margin: 5px;
  `}

`;

export const SizeTitle = styled.p`
  margin-top: 35px;
  font-weight: var(--bold-font-weight);
  text-align: center;
`;