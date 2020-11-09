import styled from "styled-components";
import theme from "./theme.js";

const StyleButton = {};

StyleButton.primary = styled.input`
  cursor:pointer;
  background-color:${theme.primary.brandColor};
  color:${theme.primary.text};
  padding:15px;
  text-transform:uppercase;
  text-decoration:none;
  border:none;
  border-radius:8px;
  &:focus {outline:0;}
`;
StyleButton.textarea = styled.textarea`
  width: 100%;
  padding:1rem;
  margin:1rem 0;
  font-size:1.5rem;
  font-weight:300;
  &::placeholder{
    color:${theme.primary.brandColor};
    opacity:0.3;
  }
`;

export default StyleButton;