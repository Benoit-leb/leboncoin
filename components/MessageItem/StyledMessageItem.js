import styled from "styled-components";
import theme from "../../styles/theme.js";

const StyledMessageItem = styled.div`
  padding: 1rem;
  & .content{
    
  }
  & .status{
    text-align: right;
    font-size: 12px;
    font-style: italic;
    color:${theme.primary.brandColor}
  }
  
`;

export default StyledMessageItem;