import { TextButtonBlue, TextButtonGoogle } from "../Texts/style"
import { ButtonBlueStyle, ButtonGoogleStyle } from "./style"
import { AntDesign } from '@expo/vector-icons';

export const ButtonDefault = ({
  textButton = '',
}) => {
  return (
    <>
      <ButtonBlueStyle>
        <TextButtonBlue>{textButton}</TextButtonBlue>
      </ButtonBlueStyle>
    </>
  )
}

export const ButtonGoogle = ({
  textButton = '',
}) => {
  return (
    <>
      <ButtonGoogleStyle>
        <AntDesign name="google" size={16} color="#496BBA" />
        <TextButtonGoogle>{textButton}</TextButtonGoogle>
      </ButtonGoogleStyle>
    </>
  )
}