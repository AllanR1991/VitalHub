import { ContainerHeader } from "../Conatainer"
import { ImageUser } from "../Images/style"
import { LinearGradienteHeader } from "./style"

const Dados = [
  {id:1, nome: 'Allan Rodrigues dos Santos', email: 'allan@allan.com', senha: 'admin', image: 'https://github.com/AllanR1991.png', typeUser: 'admin'},
  {id:2, nome: 'Carlos', email: 'carlos@carlos.com', senha: 'user', image: 'https://github.com/Carlos-Augusto-Roque.png', typeUser: 'paciente'},
  {id:3, nome: 'Evelin', email: 'evelin@evelin.com', senha: 'user', image: 'https://github.com/evy-oliveira0807.png', typeUser: 'paciente'},
]


export const Header = (
  {

  }
) => {

  return(
    <ContainerHeader>
      <LinearGradienteHeader>
        <ImageUser source={{uri: 'https://github.com/AllanR1991.png'}}/>
      </LinearGradienteHeader>
    </ContainerHeader>
  )
}