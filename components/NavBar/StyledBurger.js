import styled from "styled-components";
import theme from "../../styles/theme.js";

const StyledBurger = styled.div`
  height:3rem;
  width:3rem;
  display: inline-block;
  cursor: pointer;
  @media(min-width: ${theme.sm}){
    display:none;
  }
`;

export default StyledBurger;