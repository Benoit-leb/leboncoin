import styled from "styled-components";
import theme from "../../styles/theme.js";

const StyledPageContent = styled.div`
  min-height: 100vh;
  background: ${theme.primary.background};
  padding: 1.5rem;
  & a{
    font-weight:600;
    color:${theme.primary.textBrand};
  }
`;

export default StyledPageContent;