import styled from "styled-components";
import theme from "../../styles/theme.js";

const StyledHeader = styled.header`
  position:sticky;
  padding: 1rem;
  top:0;
  width:100%;
  z-index:100;
  & .logo{
    height: 6rem;
    width: 14rem;
    color:${theme.primary.textBrand};
    & path{
      fill: #ff6e14;
    }
  }
  & a{
    height:100%;
    display: inline-block;
  }
  & svg{
    height:100%;
    width:100%;
  }
`;

export default StyledHeader;
