import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: transparent;
  padding: 10px;
`;

export const GridItem = styled.div`
  padding: 20px;
  font-size: 10px;
  text-align: center;
`;

export const GridItemFlex = styled.div`
  display: flex;
  justify-content: center;
  color: gray;
`;

export const GridItemSpan = styled.div`
  line-height: 30px;
`;
