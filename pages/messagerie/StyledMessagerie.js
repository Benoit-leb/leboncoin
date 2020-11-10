import styled from "styled-components";
import theme from "../../styles/theme.js";

const StyledMessagerie = styled.section`
   max-width:550px;
   margin: auto;
 & #container{
   margin: 2rem 0;
   height:50vh;
   overflow-y:auto;
   border:solid 1px ${theme.primary.brandColor};
   border-radius:8px;
   background-color: rgba(230, 230, 230, 0.2);
   padding: 1rem;
   & .container{
     width:100%;
   }
  }
  & label{
    display:block;
    font-size:1.5rem;
    font-weight:600;
  }
`;

export default StyledMessagerie;