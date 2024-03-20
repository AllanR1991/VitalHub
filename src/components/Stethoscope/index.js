import { ContainerMargin } from "../Conatainer"
import { FontAwesome6 } from '@expo/vector-icons';

export const Stethoscope = () => {
  return (
    <ContainerMargin $bgColor="#49B3BA" $height="60px" $width="60px" $borderRadius={7} style={{position: "absolute", bottom:(0+56+15), right: 21 }}>
      <FontAwesome6 name="stethoscope" size={32} color="#FFF" />
    </ContainerMargin>
  )
}