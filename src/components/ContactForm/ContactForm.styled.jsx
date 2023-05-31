import styled from '@emotion/styled';

export const ConForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 10px auto 10px;
  width: 400px;

  padding: 20px;
  position: relative;
  border-radius: 3px;
  border: 1px solid grey;
  -webkit-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: transparent;

  background: linear-gradient(
    to top,
    rgb(222, 238, 84) 0%,
    rgb(200, 219, 21) 25%,
    rgb(168, 186, 6) 50%,
    rgb(58, 138, 208) 75%,
    rgb(6, 90, 167) 100%
  );
  
  &:before {
    content: '';
    position: absolute;
    top: -5px;
    height: 2px;
    width: 100%;
  }
`;

export const ContactInput = styled.input`
  flex: 1;
  padding: 1em 2em;
  border: 0;
  width: 100%;
  box-sizing: border-box;
  color: var(--white);
  font-size: 14px;
  text-shadow: 1px 1px 1px #232323;
  border-radius: 25px;
  background: yellow;
  caret-color: white;

  &:hover,
  &:focus {
    outline: none;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.05);
  }
`;

export const SubmitBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  width: 250px;

  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: yellow;

  border: 0;
  border-radius: 30px;
  color: current;
  margin-top: 50px;
  cursor: pointer;
  font-family: inherit;
  font-size: 20px;
  font-weight: bold;

  &:hover,
  &:focus {    
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(0.95);
  }
`;

export const Label = styled.label`
  font-size: 22px;
  color: current;  
`;
