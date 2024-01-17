import styled from 'styled-components';

export const Ul = styled.ul`
  position: relative;
  list-style-type: none;
  margin-top: 20px;
  top: 50%;
  left: 35%;
  transform: translate(90px, 0px);
`;

export const Li = styled.li`
  width: 300px;
  height: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid teal;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const Button = styled.button`
  padding: 7px;
  border: 3px solid red;
  border-radius: 15px;
  font-weight: 700;

  &:hover {
    background-color: #8cc351;
    color: white;
  }
`;
