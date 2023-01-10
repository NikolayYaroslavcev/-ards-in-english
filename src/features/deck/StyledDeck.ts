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

export const RangeSliderCastomStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;



`