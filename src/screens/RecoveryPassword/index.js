
import { BrandLogoBlue } from "../../components/BrandLogo/style";
import { ContainerMargin, ContainerSafeArea, ContainerScrollView } from "../../components/Conatainer";
import { StatusBar } from "react-native";
import { Description, Title } from "../../components/Texts/style";
import { InputGreen } from "../../components/Inputs/styled";
import { ButtonDefault } from "../../components/Buttons";
import { IconBack } from "../../components/IconBack/style";
import { TouchableOpacity } from 'react-native';

export default function RecoveryPassWord({
  navigation
}) {
  return (
    <ContainerSafeArea>

      <StatusBar translucent={true} barStyle="dark-content" backgroundColor={'transparent'} currentHeight />

      <ContainerMargin $mb={25} $mt={20}>
        <TouchableOpacity onPress={()=> navigation.goBack()} style={{position:"absolute",
  top:0,
  left:'5%',
  width:30,
  height:30, }}>
          <IconBack />
        </TouchableOpacity>
        <BrandLogoBlue />
      </ContainerMargin>

      <ContainerScrollView>

        <Title>Recuperar senha</Title>

        <ContainerMargin $mt={15}>
          <Description>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Description>
        </ContainerMargin>

        <ContainerMargin $gap={15} $mt={20}>
          <InputGreen
            placeholder="Usuário ou E-mail"
            enterKeyHint="next"
            keyboardType="email-address"
            maxLength={50}
          />
        </ContainerMargin>

        <ContainerMargin $mt={30} $gap={15} $mb={30}>
          <ButtonDefault textButton="Continuar" />
        </ContainerMargin>

      </ContainerScrollView>

    </ContainerSafeArea>
  )
} 