import styled from "styled-components";
import { Link } from "react-router-dom";
import Logojpg from "../../assets/23.jpeg";

export const NavigationContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: black;
`;

export const Navlink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const LogoKus = styled.img`
  background-image: url(${Logojpg});
  background-size: cover;
  background-position: center;
  height: 70px;
  width: 70px;
  /* background-image: ${({ imageUrl }) => `url(${imageUrl})`}; */
`;
