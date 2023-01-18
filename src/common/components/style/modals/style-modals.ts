import styled from 'styled-components';


export const ModalWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: #000000;

  h1 {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }

  h2 {
    font-weight: 400;
    font-size: 13px;
    line-height: 154%;
    opacity: 0.5;
    padding-top: 55px;
  }

  input {
    border-bottom: 1px solid #666;
    padding: 10px;
  }
`
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ModalCheckbox = styled.div`
  display: flex;
  row-gap: 12px;
  align-items: center;
  padding-top: 29px;
`

export const ButtonCheckbox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 35px;

  button {
    background: #FCFCFC;
    box-shadow: 0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    padding: 8px 44px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
  }

  .cancel {
    opacity: 0.8;
  }

  .save {
    background: #346af8;
    color: #fff;

    :hover {
      background: #1355ff;
    }
  }
`
