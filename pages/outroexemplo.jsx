import Header from "../src/components/header/Header"
import Title from "../src/components/title/Title"
import Subtitle from "../src/components/subtitle/Subtitle"

function OutroExemplo () {
    return (
        <>
            <Header image={'https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee2.jpg'}>
                <Title>Ooutro Café Dev</Title>
                <Subtitle text = "Melhor café para o programador" />
            </Header>
        </>
    )
}

export default OutroExemplo