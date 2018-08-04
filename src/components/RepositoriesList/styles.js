import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  button {
    width: 100%;
    border: 0;

    &:hover {
      background: #f5f5f5;
    }
  }
`;

export const Repository = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 15px 0;

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

  i {
    flex: 1;
    opacity: 0.4;
    text-align: right;
    align-self: center;
  }
`;
