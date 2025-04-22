import { useState } from "react"
import Head from "next/head"
import Title from "../src/components/title/Title"
import Subtitle from "../src/components/subtitle/Subtitle"
import Button from "../src/components/button/Button"


function HomePage () {
    const[click, setClick] = useState(0) 
    const handleClick = () => {
        setClick(click + 1)
    }

    return (
        <>
            <Head>
                <title>Teste fragment</title>
            </Head>
            <div>
                <Title> um texto</Title>
                <Subtitle text="Um subtitulo" />
                <h1>Hello World, NextJs + ReactJs</h1>
                <Subtitle />
                <Button
                    onClick={handleClick}
                >
                    Botão Teste
                </Button>
                <p>Cliques: {click}</p>
            </div>
        </>
    )
}

export default HomePage

