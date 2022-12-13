import styled from "styled-components";

export const CartItemCantainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  border: 1px solid black;

  img {
    width: 30%;
    border: 1px solid black;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    font-size: 16px;
  }
`;
