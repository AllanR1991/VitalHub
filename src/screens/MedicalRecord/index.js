
import { StatusBar } from "react-native"
import { Container, ContainerMargin, ContainerScrollView } from "../../components/Conatainer"
import { ImageUser } from "../../components/Images/style"
import { TextLabel, TextQuickSandRegular, Title } from "../../components/Texts/style"
import { InputGreen, InputGreenMultiLine } from "../../components/Inputs/styled"

export default MedicalRecord = ({
  navigation,
  route
}) => {

  const {name, age, email, photo} = route.params

  return (
    <Container>

      <StatusBar translucent={true} barStyle="light-content" backgroundColor={'transparent'} currentHeight />

      <ImageUser source={photo !== undefined ? { uri: photo } : require('../../assets/images/NotImage.svg')} $width="100%" $height="280px" />

      <ContainerScrollView
        showsVerticalScrollIndicator={false}
      >

      
      <ContainerMargin $mt={20} $width="100%">
        <Title>
          {name}
        </Title>
      </ContainerMargin>
      <ContainerMargin $width="80%" $mt={18} $fd="row" $justContent="space-around">
        <TextQuickSandRegular>
          {age}
        </TextQuickSandRegular>
        <TextQuickSandRegular>
          {email}
        </TextQuickSandRegular>
      </ContainerMargin>

      <ContainerMargin $alingItens="flex-start">
        <TextLabel>Descrição da consulta</TextLabel>
        <InputGreenMultiLine placeholder="Descrição"/>
      </ContainerMargin>

      <ContainerMargin $alingItens="flex-start">
        <TextLabel>Diagnóstico do paciente</TextLabel>
        <InputGreen placeholder="Diagnóstico"/>
      </ContainerMargin>

      <ContainerMargin $alingItens="flex-start">
        <TextLabel>Prescrição médica</TextLabel>
        <InputGreenMultiLine placeholder="Prescrição medica"/>
      </ContainerMargin>      
      </ContainerScrollView>
    </Container>
  )
}