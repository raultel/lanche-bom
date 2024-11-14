import styled from 'styled-components';

export const Button = styled.div`
  background: #ffc100;
  border: 1px solid #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 100%;
  padding: 0;
  margin: 0;
  color: #333;

  &:hover {
    color: #555;
  }
`;