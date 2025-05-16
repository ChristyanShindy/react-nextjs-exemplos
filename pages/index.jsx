import Title from "../src/components/title/title"
import Subtitle from "../src/components/subtitle/Subtitle"
//Arquivo responsavel pela pagina inicial
function HomePage () {
  return(
    <div>
      <Title>Primeiro Titulo</Title>
      <Subtitle text="Um Subtitulo"/>
      <Title>Segundo Titulo </Title>
      <Subtitle text="Outro Subtitulo"/>
    </div>
  )
}

export default HomePage