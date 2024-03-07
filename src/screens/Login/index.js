import { BrandLogoBlue } from "../../components/BrandLogo/style";
import { ButtonDefault, ButtonGoogle } from "../../components/Buttons";
import { Container, ContainerMargin } from "../../components/Conatainer";
import { InputGreen } from "../../components/Inputs/styled";
import { LinkGray } from "../../components/Links";
import { Title } from "../../components/Texts/style";


export default function Login() {
  return (
    <Container>

      <ContainerMargin $mb={25}>
        <BrandLogoBlue />
      </ContainerMargin>
      <Title>Entrar ou criar conta</Title>
      <ContainerMargin $gap={15} $mt={20} $mb={10}>
        <InputGreen
          placeholder="Usuário ou E-mail"
          enterKeyHint="next"
          keyboardType="email-address"
          maxLength={50}
        />

        <InputGreen
          placeholder="Senha"
          enterKeyHint="enter"
          keyboardType="default"
          maxLength={50}
          secureTextEntry={true}
        />
      </ContainerMargin>

      <LinkGray>Esqueceu sua senha?</LinkGray>

      <ContainerMargin $mt={42} $gap={15} $mb={30}>
        <ButtonDefault textButton="Entrar" />
        <ButtonGoogle textButton="Entrar com google"/>
      </ContainerMargin>


    </Container>


  )
} 