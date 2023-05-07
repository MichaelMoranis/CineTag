import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css";
import Banner from "components/Banner";

function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
         <h1>
            Meus favoritos
         </h1>
      </Titulo>
    </>
  );
}

export default Favoritos;
