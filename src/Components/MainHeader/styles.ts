import styled from 'styled-components';

export const Logo = styled.img`
  width: 35px;  // Ajuste o tamanho conforme necessário
  height: auto;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  background-color: #ffc100;
`;
