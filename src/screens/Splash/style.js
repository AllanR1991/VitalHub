import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";


export const LinearGradienteSplash = styled(LinearGradient).attrs({
  colors:['#49B3BA', '#496BBA']  
})`
  position: absolute;
  left: 0px;
  right:0px;
  top:0px;
  height:100%;
`

export const  LogoBrandWhite = styled.Image.attrs({
  source: require('../../assets/images/VitalHub_Logo_Branco.png')
})`
  width:300px;
  height: 180px;
  object-fit:contain;
`