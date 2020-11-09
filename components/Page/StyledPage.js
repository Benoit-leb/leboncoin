import styled from "styled-components";
import theme from "../../styles/theme.js";

const StyledPage = styled.div`
  background: ${theme.primary.background};
  color: ${theme.primary.text};
  max-width: ${theme.maxWidth};
  margin: 0 auto;
`;

export default StyledPage;