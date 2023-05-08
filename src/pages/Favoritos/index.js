import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Card from "components/Card";

function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1 className={styles.titulo}>
            Meus favoritos
        </h1>
      </Titulo>
      <section className={styles.container}>
          <Card id="1" titulo="gato bonifacio" capa="https://github.com/michaelmoranis.png" />
      </section>
    </>
  );
}

export default Favoritos;
