import Header from "../src/components/header/Header"
import Title from "../src/components/title/Title"
import Subtitle from "../src/components/subtitle/Subtitle"

function OutroExemplo () {
  return (
        <>
            <Header image={'https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee2.jpg'}>    
                <Title>Café Dev2</Title>
                <Subtitle text="Melhor Segundo café para um programador" />
            </Header>
        </>
    )
}

export default OutroExemplo