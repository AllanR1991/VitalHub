import styled, { css } from "styled-components/native";

export const ButtonBlueStyle = styled.TouchableOpacity`
  width: 100%;
  border-radius: 5px;
  background-color: #496BBA;
  padding:12px;
`

export const ButtonGoogleStyle = styled(ButtonBlueStyle)`
  background-color: #FAFAFA;
  border: 1px solid #496BBA;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  gap:27px;
`

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  top:0px;
  left:0px;
  width:30px;
  height:30px;
`
export const ButtonSelectStyle = styled(ButtonBlueStyle)`
  ${({ selectStatus }) => {
    if (selectStatus) {
      return css`
        border:none;
        background-color: #496BBA;      
      `
    }else{
      return css`
        background-color: #FBFBFB;
        border: 2px solid #607EC5;
      `
    }
  }}
  width:30%;
  
`

export const ButtonSelectGreenStyle = styled(ButtonSelectStyle)`
  ${({ selectStatus }) => {
    if (selectStatus) {
      return css`
        border:none;
        background-color: #60BFC5;      
      `
    }else{
      return css`
        background-color: #FBFBFB;
        border: 2px solid #60BFC5;
      `
    }
  }}
`