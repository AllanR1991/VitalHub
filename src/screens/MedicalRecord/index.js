import { StatusBar } from "expo-status-bar"
import { Container } from "../../components/Conatainer"
import { ImageUser } from "../../components/Images/style"

export default MedicalRecord = () => {
  return (
    <Container>

      <StatusBar translucent={true} barStyle="dark-content" backgroundColor={'transparent'} currentHeight />

      <ImageUser source={{uri: 'https://github.com/AllanR1991.png'}} $width="100%" $height="280"/>

    </Container>
  )
}