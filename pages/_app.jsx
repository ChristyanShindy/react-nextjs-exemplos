//Arquivo que conseguimos fazer algumas configurações do next
//Padrão Next para poder importar padrão Global
import Head from 'next/head'
import '../src/style.css'
function App ({ Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Titulo padrão</title>
      </Head>
      <Component { ...pageProps}/> //Padrão Next para poder funcionar padrão Global
    </>
  )
}

export default App