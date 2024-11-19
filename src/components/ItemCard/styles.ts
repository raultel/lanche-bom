import styled from 'styled-components';

export const Logo = styled.img`
  width: auto;  // Ajuste o tamanho conforme necessário
  height: 300px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #ffc100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
`;

export const Info = styled.div`
	display: flex;
	flex-direction column;
	width: 100%;
	padding: 0;
	margin: 0;
`;

export const Imagem = styled.div`
	padding: 10px;
	background-color: lightgray;
	text-align: center;
`;
