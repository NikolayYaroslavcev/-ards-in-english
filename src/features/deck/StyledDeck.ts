import styled from 'styled-components';

export const TableStyled = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(-1px -1px 2px rgba(0, 0, 0, 0.1));
  margin-bottom: 15px;

  thead th {
    background: #EFEFEF;
    text-align: left;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }

  thead th:nth-child(1) {
    max-width: 250px;
  }

  thead th:nth-child(2) {
    max-width: 230px;
  }

  thead th:nth-child(3) {
    max-width: 215px;
  }

  thead th:nth-child(4) {
    max-width: 200px;
  }

  thead th:nth-child(5) {
    max-width: 109px;
  }

  tr {
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    transition: all 0.2s;

    :hover {
      background: rgba(236, 234, 234, 0.44);
    }

  }

  td {
    cursor: pointer;
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

export const RangeSliderStyle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  input {
    text-align: center;
    width: 36px;
    height: 36px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 2px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }

  span .MuiSlider-thumb {
    width: 16px;
    height: 16px;
  }

  span .MuiSlider-thumb:after {
    position: absolute;
    content: "";
    background-color: #fff;
    width: 8px;
    height: 8px;
  }

  span .MuiSlider-thumb.Mui-focusVisible {
    box-shadow: 0px 0px 0px 4px rgba(115, 113, 113, 0.5);
  }
`

export const SearchSliderStyle = styled.div`
  display: flex;
  column-gap: 25px;


  div:first-child {
    flex: 1 1 auto;
  }
`
export const SearchButtonStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 17px;
    line-height: 17px;
    color: #000000;
  }
`
export const PaginationStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 15px;
  align-items: center;

  div select {
    padding-right: 17px;
    padding-left: 5px;
  
  }

`

