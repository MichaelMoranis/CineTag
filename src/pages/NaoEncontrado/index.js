import styles from "./NaoEncontrado.module.css"

function NaoEncontrado() {
    return (
        <section className={styles.container}>
            <h2>Algo deu errado!!</h2>
            <p>o conteudo que voce procura nao existe!!</p>
        </section>
    )
}

export default NaoEncontrado