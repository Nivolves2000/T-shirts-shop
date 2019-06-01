import React, { useState, useEffect } from "react";

import Goods from "./components/Goods/Goods";
import Sizes from "./components/Sizes/Sizes";
import Basket from "./components/Basket/Basket";

import { BASE_PATH } from "./constants/API"

const App = () => {
  const [ currentSize, setCurrentSize ] = useState( "" );
  const [ basket, setBasket ] = useState( [] );
  const [ data, setData ] = useState( [] );


  useEffect( () => {
    fetchData();
  }, [] );

  function fetchData() {
    fetch( `${ BASE_PATH }/t-shirts` )
      .then( res => res.json() )
      .then( result => setData( result ) )
      .catch( error => error );
  }



  let goods = currentSize ? data.filter( ( { size } ) => size === currentSize ) : data;



  return (
    <div className="shop">
      <Basket basket={basket} setBasket={setBasket} />
      <Sizes goods={data} currentSize={currentSize} setCurrentSize={setCurrentSize} />
      <Goods goods={goods} basket={basket} setBasket={setBasket} />
    </div>
  );
}

export default App;
