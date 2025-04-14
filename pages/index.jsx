import Head from "next/head"
import Title from "../src/components/title/Title"
import Subtitle from "../src/components/subtitle/Subtitle"


function HomePage () {
    return (
        <>
        <Head>
            <title>Teste fragment</title>
        </Head>
        <div>
            <Title> um texto</Title>
            <Subtitle text="Um subtitulo"/>
            <h1>Hello World, NextJs + ReactJs</h1>
            <Subtitle />
            <Title> outro texto</Title> 
        </div>
        </>
    )
}

export default HomePage

