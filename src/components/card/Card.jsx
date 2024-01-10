import Image from "next/image";
import React from "react";
import styles from "./card.module.css";

function Card({ destino, preco, imagem }) {
  return (
    <div className={styles.cardContainer}>
      <div>
        <Image
          src={imagem}
          alt="alemanha"
          width={300}
          height={300}
          className="rounded-sm "
        ></Image>
      </div>
      <div>
        <h2 className="font-bold">Pacotes para {destino}</h2>
        <p className="font-bold">Hotel + Aéreo</p>
      </div>
      <hr />
      <div className="self-start">
        <span className="font-bold">Preço por pessoa</span>
        <p className="font-bold">R$ {preco}</p>
      </div>
    </div>
  );
}

export default Card;
