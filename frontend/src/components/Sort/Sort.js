import React, { useState } from "react";
import PropTypes from "prop-types";



import { Select, SortWrapper, SelectOptions, SelectOption } from "./StyledSort";


const Sort = ( { option, sortOptions, setOption } ) => {
  const [ isSelectOpen, openSelect ] = useState( false );


  return (
    <SortWrapper>
      <span>Order by</span>
      <Select onClick={() => openSelect( !isSelectOpen )}>{option}
        <SelectOptions isSelectOpen={isSelectOpen}>
          {sortOptions.map( ( option ) => (
            <SelectOption onClick={() => { setOption( option ); openSelect( !isSelectOpen ) }} key={option}>{option}</SelectOption>
          ) )}
        </SelectOptions>
      </Select>
    </SortWrapper>
  );
}

export default Sort;

Sort.propTypes = {
  option: PropTypes.string,
  sortOptions: PropTypes.array,
  setOption: PropTypes.func,
};

Sort.defaultProps = {
  option: "None",
  sortOptions: [],
  setOption: () => { },
};