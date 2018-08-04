import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export const Issue = styled.div`
  width: 30%;
  padding: 20px;
  margin: 20px;
  margin-right: 0;
  height: fit-content;
  background: #fff;
  display: flex;
  flex-direction: row;
  border-radius: 8px;

  img {
    height: 64px;
    width: 64px;
    border-radius: 8px;
    margin-right: 10px;
  }

  div {
    width: fit-content;
    margin: auto 0;
    text-align: left;

    p {
      white-space: nowrap;
      overflow: hidden;
    }

    button {
      width: fit-content;
      color: #fff;
      background: #b286d1;
      border-radius: 3px;
      width: 180px;
      height: 30px;

      &:hover {
        background: #a286d1;
      }

      i {
        color: #fff;
        font-size: 20px;
        margin: 0px;
        margin-right: 20px;
        padding: 0px;
      }
    }
  }
`;
