
// Exemplo de componente react com props (atributos)
function Subtitle ({ text }) {
    return (
        <h4>{ text }</h4>
    )
}

Subtitle.defaultProps = {
    text: 'Qualquer coisa'
}

export default Subtitle
