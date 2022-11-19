import styled from "styled-components";

export const ProductCartContainer = styled.div`
  border: 2px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    width: 70%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: black;
`;

export const Name = styled.span`
  width: 90%;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;

/* .product - card - container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 355px;
  align-items: center;
  position: relative;
  border-radius: 10px;
  border: 2px solid black;
  ;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;

  img{
    width: 100%;
    height: 85%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 10px;
    border: 0.5px solid black;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  .footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }
} */