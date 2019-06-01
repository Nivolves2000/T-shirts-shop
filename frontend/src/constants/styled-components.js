import { css } from 'styled-components'
const sizes = {
  phone: 480,
  tabletL: 660,
  tablet: 768,
  desktop: 1000
}
export default Object.keys( sizes ).reduce( ( acc, label ) => {
  acc[ label ] = ( ...args ) => css`
      @media (min-width: ${sizes[ label ] }px) {
         ${css( ...args ) };
      }
   `
  return acc
}, {} )