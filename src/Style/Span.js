import styled from "styled-components";

export const Span = styled.span`
  font-size: ${(props) => (props.Between ? "50px" : "19px")};
  color: white;
  font-family: ${(props) => (props.MontserratBold ? "MontserratBold" : "")};
  line-height: 80px;
  padding: ${(props) => (props.padd ? "0 10px 0 10px" : "")};
`;
