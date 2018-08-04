import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  height: calc(100% - 100px);
  width: 100%;
  background: 'red';
`;

export const Issues = styled.div`
  height: 100%;
  width: 100%;

  i {
    margin-top: 25%;
    margin-left: 40%;
    font-size: 70px;
    color: #b286d1;
  }
`;
