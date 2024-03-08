import { StatusBar } from "react-native";
import { Container } from "../../components/Conatainer";
import { Header } from "../../components/Header";

export default function Home () {
  return(
    <Container>
      <StatusBar  translucent={true} barStyle="light-content" backgroundColor={'transparent'}/>

      <Header/>
    </Container>
  )
}