import styled from "styled-components";

export const HeadingCenter = styled.h1`
  font-size: 54.25px;
  font-family: "sfTextThin";
  color: white;
  line-height: 1px;
  padding: ${(props) => (props.primary ? "0 15px 0 15px" : "auto")};
`;
