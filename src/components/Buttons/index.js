import { TextButtonBlue, TextButtonGoogle, TextNotSelect, TextSelect } from "../Texts/style"
import { ButtonBlueStyle, ButtonGoogleStyle, ButtonNotSelectStyle, ButtonSelectStyle } from "./style"
import { AntDesign } from '@expo/vector-icons';

export const ButtonDefault = ({
  onPress,
  textButton = '',
}) => {
  return (
    <>
      <ButtonBlueStyle onPress={onPress}>
        <TextButtonBlue>{textButton}</TextButtonBlue>
      </ButtonBlueStyle>
    </>
  )
}

export const ButtonGoogle = ({
  textButton = '',
  onPress,
}) => {
  return (
    <>
      <ButtonGoogleStyle onPress={onPress}>
        <AntDesign name="google" size={16} color="#496BBA" />
        <TextButtonGoogle>{textButton}</TextButtonGoogle>
      </ButtonGoogleStyle>
    </>
  )
}

export const ButtonSelect = ({
  onPress,
  texto,
  selectStatus
}) => {
  return(
    <ButtonSelectStyle selectStatus={selectStatus} onPress={onPress}>
      <TextSelect selectStatus={selectStatus}>{texto}</TextSelect>
    </ButtonSelectStyle>
  )
}

