import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(-1px -1px 2px rgba(0, 0, 0, 0.1));

  thead th {
    background: #EFEFEF;
    text-align: left;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }

  thead th:nth-child(1) {
    width: 300px;

  }

  thead th:nth-child(2) {
    width: 230px;
  }

  thead th:nth-child(3) {
    width: 215px;
  }

  thead th:nth-child(4) {
    width: 155px;
  }

  thead th:nth-child(4) {
    width: 109px;
  }

  tr {
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
  }

  th, td {

    padding: 20px;
  }
`
export const ArrowTableBlock = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  
  img {
    cursor: pointer;
  }
`
