//Arquivo que conseguimos fazer algumas configurações do next
//Padrão Next para poder importar padrão Global
import '../src/style.css'
function App ({ Component, pageProps}) {
  return <Component { ...pageProps}/> //Padrão Next para poder funcionar padrão Global
}

export default App