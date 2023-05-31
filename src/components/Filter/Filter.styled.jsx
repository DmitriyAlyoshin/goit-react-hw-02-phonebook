import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
  color: current;  
`;

export const FilterInput = styled.input`
  flex: 1;
  margin-top: 15px;
  padding: 10px 20px;
  border: 0;
  width: 300px;
  box-sizing: border-box;
  color: current;
  font-size: 14px;  
  text-shadow: 1px 1px 1px black;
  border-radius: 25px; 

  background: rgb(75, 138, 208);

  &:hover,
  &:focus {
    outline: none;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.05);
  }
`;
