import React from "react";
import PropTypes from "prop-types";

import { SizesWrapper, Size, SizeTitle, SizesContainer } from "./StyledSizes";
import { SIZES } from "../../constants/sizes";

const Sizes = ( { currentSize, setCurrentSize } ) => {






  return (
    <SizesWrapper>
      <SizeTitle>Sizes: </SizeTitle>
      <SizesContainer>
        {SIZES.map( size => (
          <Size checkSize={currentSize !== size ? true : false} onClick={currentSize !== size ? () => setCurrentSize( size ) : () => setCurrentSize( "" )} key={size}>{size}</Size>
        ) )}
      </SizesContainer>
    </SizesWrapper>
  );
}

export default Sizes;

Sizes.propTypes = {
  goods: PropTypes.array,
  currentSize: PropTypes.string,
  setCurrentSize: PropTypes.func,
};

Sizes.defaultProps = {
  goods: [],
  currentSize: "",
  setCurrentSize: () => {},
};