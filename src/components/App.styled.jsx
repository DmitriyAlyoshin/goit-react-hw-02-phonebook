import styled from '@emotion/styled';

export const Container = styled.div`
  height: '100vh';
  text-align: center;
  padding: 30px 20px 30px 20px;  
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin: 10px auto 10px;  
  width: 450px;  
  padding: 10px 50px 10px;
  position: relative;
  border-radius: 5px;
  border: 1px solid gray;
  -webkit-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.3);
  

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    height: 2px;
    width: 100%;
  }
`;

export const Phonebook = styled.h1`
  margin-bottom: 15px;  
`;

export const Contacts = styled.h2`
  margin-bottom: 15px;
  font-size: 26px;  
`;
