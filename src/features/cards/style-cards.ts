import styled from "styled-components";


export const CardsHeaderStyle = styled.div`
  div{
    display: flex;
    align-items: center;
    column-gap: 5px;
  }
  p {
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: #000000;
  }
  
  display: flex;
  align-items: center;
  column-gap: 20px;
  justify-content: space-between;

`

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
    width: 300px ;
    
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
export const ActionBlock = styled.div`
  display: flex;
  column-gap: 10px;

  img {
    cursor: pointer;
  }
`
export const Search = styled.div`
  margin-bottom: 14px ;
  p {
    font-size: 17px;
    line-height: 17px;
    color: #000000;
    margin-bottom: 10px;
  }
  
`
export const SearchBlock = styled.div`
  position: relative;
 

  input {
    width: 100%;
    min-height: 30px;
    padding: 10px 40px;
    //opacity: 0.5;
    background-color: #FFFFFF;

    border: 1px solid #D9D9D9;
    border-radius: 2px;
    overflow: hidden;

    ::placeholder {
      font-size: 14px;
      line-height: 24px;
      color: #000000;
      opacity: 0.5;
    }
  }


  img {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
  }
`