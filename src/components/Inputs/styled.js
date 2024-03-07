import styled from "styled-components/native";


export const InputGreen = styled.TextInput.attrs({
  placeholderTextColor: '#34898F',
  autoCapitalize: "none",
  autoCorrect: false,
  clearButtonMode: "while-editing",
  cursorColor: '#34898F',
  enablesReturnKeyAutomatically: true,
})`
  padding:16px;
  width:100%;
  
  border: 2px solid #49B3BA;
  border-radius: 5px;

  font-family: 'MontserratAlternates_600SemiBold';
  font-size: 14px;
  color: #34898F;

`