import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  padding: 0 30px;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(204, 204, 204, 1);
  box-shadow: 0px 3px 5px 0px rgba(204, 204, 204, 1);

  select {
    height: 42px;
    width: 200px;
    margin-left: auto;
    margin-right: 0px;
    border-width: 1px;
  }
`;

export const Repository = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin: auto 0;

  img {
    height: 45px;
    width: 45px;
    margin-right: 10px;
  }

  div {
    width: fit-content;
    margin: auto 0;
    text-align: left;
  }
`;
