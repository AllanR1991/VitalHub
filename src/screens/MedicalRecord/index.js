
import { StatusBar } from "react-native"
import { Container, ContainerMargin } from "../../components/Conatainer"
import { ImageUser } from "../../components/Images/style"
import { TextQuickSandRegular, Title } from "../../components/Texts/style"

export default MedicalRecord = ({
  navigation,
  route
}) => {

  const {name, age, email, photo} = route.params

  return (
    <Container>

      <StatusBar translucent={true} barStyle="light-content" backgroundColor={'transparent'} currentHeight />

      <ImageUser source={photo !== undefined ? { uri: photo } : require('../../assets/images/NotImage.svg')} $width="100%" $height="280px" />

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


    </Container>
  )
}