import { useState } from "react"
import Head from "next/head"
import Title from "../src/components/title/title"
import Subtitle from "../src/components/subtitle/Subtitle"
import Button from "../src/components/button/Button"
//Arquivo responsavel pela pagina inicial
function HomePage () {
  const [click, setClick] = useState(0)

  const handleClick = () => {
    console.log("Handle Click")
    setClick(click + 1)
  }
  return(
    <>
      <Head>
        <title>Titulo diferente da HomePage</title>
      </Head>
      <div>
        <Title>Primeiro Titulo</Title>
        <Subtitle text="Um Subtitulo"/>
        <Title>Segundo Titulo </Title>
        <Subtitle text="Outro Subtitulo"/>
        <Button 
          onClick={handleClick}
        >
          Botão teste
        </Button>
        <p>Cliques: {click} </p>
      </div>
    </>
  )
}

export default HomePage