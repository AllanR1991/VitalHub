import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import { BrandLogoBlue } from "../../components/BrandLogo/style";
import { ButtonDefault, ButtonGoogle } from "../../components/Buttons";
import { Container, ContainerMargin, ContainerSafeArea, ContainerScrollView } from "../../components/Conatainer";
import { InputGreen } from "../../components/Inputs/styled";
import { LinkBlueLigth, LinkGray } from "../../components/Links";
import { TextGrayDark, Title } from "../../components/Texts/style";


export default function Login({
  navigation
}) {
  return (

    // <ContainerSafeArea style={{ justifyContent: "center", alignItems: "center" }}>
    // Com safeArea o ScrollView esta com comportamento indevido.
    <Container>
      <StatusBar translucent={true} barStyle="dark-content" backgroundColor={'transparent'} />


      <ContainerMargin $mb={25} $mt={20}>
        <BrandLogoBlue />
      </ContainerMargin>
      <ContainerScrollView $margin="80px">
        <Title>Entrar ou criar conta</Title>
        <ContainerMargin $gap={15} $mt={20} $mb={10}>
          <InputGreen
            placeholder="Usuário ou E-mail"
            enterKeyHint="next"
            keyboardType="email-address"
            inputMode="email"
            maxLength={50}
          />

          <InputGreen
            placeholder="Senha"
            enterKeyHint="enter"
            keyboardType="default"
            inputMode="text"
            maxLength={50}
            secureTextEntry={true}
          />
        </ContainerMargin>

        <LinkGray onPress={() => { navigation.navigate('RecoveryPassWord') }}>Esqueceu sua senha?</LinkGray>

        <ContainerMargin $mt={42} $gap={15} $mb={30}>
          <ButtonDefault textButton="Entrar" />
          <ButtonGoogle textButton="Entrar com google" />
        </ContainerMargin>

        <ContainerMargin $fd="row" $mb={30} >
          <TextGrayDark>Não tem conta? </TextGrayDark>
          <LinkBlueLigth onPress={() => { navigation.navigate('CreateAccount') }}>Crie uma conta agora!</LinkBlueLigth>
        </ContainerMargin>
      </ContainerScrollView>
    </Container>
    // </ContainerSafeArea>


  )
} 