import styled from "styled-components";

import { ReactComponent as ShoppingSVG } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSVG)`
  width: 30px;
  height: 30px;
  background-color: white;
`;

export const CardIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid black;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
`;
