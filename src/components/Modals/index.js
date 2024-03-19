import { Modal, Text, View } from "react-native"
import { Container, ContainerMargin } from "../Conatainer"
import { Description, TextQuickSandRegular, Title } from "../Texts/style"
import { ButtonDefault } from "../Buttons"
import { LinkUnderlineDefault } from "../Links"
import * as Notifications from 'expo-notifications'
import { ImageUser } from "../Images/style"


Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  })
})

export const ModalCancel = ({
  showModalCancel,
  consultSelect,
  data,
  setShowModalCancel
}) => {

  const handleCallNotifications = async () => {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== 'granted') {
      alert('Você não habilitou, receber notificação no app.');
      return;
    }

    // const token = await Notifications.getExpoPushTokenAsync();
    // console.log(token)

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Consulta cancelada',
        body: 'Consulta com o Dr. Allan foi cancelada, favor reagendar.'
      },
      trigger: null
    })
  }

  return (

    <Modal
      transparent={true}
      visible={showModalCancel}
      statusBarTranslucent={true}
      onRequestClose={() => setShowModalCancel(false)}
    >
      <Container
        $justContent="center"
        $bgColor="rgba(0,0,0,0.3)"
      >
        <ContainerMargin
          $width="90%"
          $height="310px"
          $borderRadius={10}
          $bgColor="#FFF"
        //$pd="28px 30px"
        >
          <Title>
            Cancelar consulta
          </Title>
          <ContainerMargin $width="80%" $mt={15}>
            <Description>
              Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
            </Description>
          </ContainerMargin>

          <ContainerMargin $mt={30} $gap={30} $width="80%">
            <ButtonDefault textButton="Confirmar" onPress={() => {
              handleCallNotifications()
              setShowModalCancel(false)
              // const index = data.findIndex(paciente => paciente.id === consultSelect.id);
              // if (index !== -1){
              //   data[index].statusConsult = 'Canceladas'
              // }
            }} />

            <LinkUnderlineDefault onPress={() => {
              setShowModalCancel(false)
            }}>
              Cancelar
            </LinkUnderlineDefault>
          </ContainerMargin>

        </ContainerMargin>
      </Container>
    </Modal>

  )
}

export const ModalMedicalRecord = ({
  consultSelect,
  setShowModalMedicalRecord,
  showModalMedicalRecord,
}) => {
  console.log('medicalk ', consultSelect)
  
  return (
    <Modal
      transparent={true}
      visible={showModalMedicalRecord}
      statusBarTranslucent={true}
      onRequestClose={() => { setShowModalMedicalRecord(false) }}
    >
      <Container
        $justContent="center"
        $bgColor="rgba(0,0,0,0.3)"
      >
        <ContainerMargin
          $width="90%"          
          $borderRadius={10}
          $bgColor="#FFF"
        >
          <ContainerMargin $mt={30}>
            <ImageUser source={consultSelect.photo !== undefined ? { uri: consultSelect.photo } : require('../../assets/images/NotImage.svg')} $width="90%" $height="181px" />
          </ContainerMargin>
          <ContainerMargin $mt={20} $width="100%">
            <Title>
              {consultSelect.name}
            </Title>
          </ContainerMargin>
          <ContainerMargin $width="80%" $mt={18} $fd="row" $justContent="space-around">
            <TextQuickSandRegular>
              {consultSelect.age}
            </TextQuickSandRegular>
            <TextQuickSandRegular>
              {consultSelect.email}
            </TextQuickSandRegular>
          </ContainerMargin>

          <ContainerMargin $mt={30} $mb={20} $gap={30} $width="80%">
            <ButtonDefault textButton="Inserir prontuário" onPress={() => {
              setShowModalMedicalRecord(false)
            }} />

            <LinkUnderlineDefault onPress={() => {
              setShowModalMedicalRecord(false)
            }}>
              Cancelar
            </LinkUnderlineDefault>
          </ContainerMargin>

        </ContainerMargin>
      </Container>
    </Modal>
  )
}