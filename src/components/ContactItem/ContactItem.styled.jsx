import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 20px; 
  
`;

export const Name = styled.span`
  width: 150px;
  font-size: 18px;
  color: current;  
  `;

export const Number = styled.span`
  width: 150px;
  font-size: 18px;
  color: black;  
  font-weight: 750;
`;

export const DeleteBtn = styled.button`
  display: block;
  width: 75px;
  text-align: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  color: current;
  cursor: pointer;
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: rgb(80, 167, 243);
  border: 0;
  border-radius: 44%;

  &:hover,
  &:focus {
    outline: none;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(0.95);
  }
`;
