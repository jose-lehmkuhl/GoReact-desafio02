import styled from 'styled-components';

export const Aside = styled.aside`
  width: 320px;
  height: 100%;
  padding: 30px;
  background: #fff;
  z-index: 10;
  -webkit-box-shadow: 3px 0px 5px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 3px 0px 5px 0px rgba(204, 204, 204, 1);
  box-shadow: 3px 0px 5px 0px rgba(204, 204, 204, 1);
`;

export const Form = styled.form`
  width: 100%;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 5px;
    background: #eee;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${({ gotError }) => (gotError ? '2px solid #F00' : 0)};
  }

  button {
    width: 50px;
    height: 50px;
    margin-left: 10px;
    background: #59ea9a;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
    }
  }
`;

export const Divider = styled.hr`
  color: #f5f5f5;
  opacity: 0.5;
  margin: 40px;
`;
