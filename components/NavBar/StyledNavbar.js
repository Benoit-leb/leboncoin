import styled from "styled-components";
import theme from "../../styles/theme.js";

const StyledNavbar = styled.ul`
  position:absolute;
  right:-100%;
  top:6rem;
  transition:right 0.3s;
  padding:2rem;
  margin:0;
  width:100%;
  height:100vh;
  &.open{
    display: block;
    right:0;
  }
  @media(min-width: ${theme.sm}){
    display:block;
    position:inherit;
    right:inherit;
    top:inherit;
    height:inherit;
    width:inherit;
    padding:0;
  }
  & a{
    font-size: 16px;
    font-weight:100;
    width:100%;
    @media(min-width: ${theme.sm}){
      text-align:center;
      display:inline-block;
      font-size: 24px;
    }
  }
  & li{
    display: block;
    text-align: left;
    padding: 1rem 0;
    @media(min-width: ${theme.sm}){
      display:inline-block;
      margin:0 10px;
      padding:0;
    }
    & span{
      width: 20px;
      margin-right:1rem;
      display: inline-block;
      @media(min-width: ${theme.sm}){
        margin-right:0;
        width:2rem;
      }
    }
    & div{
      display: inline-flex !important;
      margin-right: 1rem;
      font-size:1.5rem;
      @media(min-width: ${theme.sm}){
        display:flex !important;
        margin-right:0;
        margin-bottom:0.5rem;
        font-size:1rem;
      }
    }
  }
`;

export default StyledNavbar;