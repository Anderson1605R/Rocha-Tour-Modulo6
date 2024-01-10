"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/home.module.css";
import GridContainer from "@/components/grid/GridContainer";

import Card from "@/components/card/Card";
import Button from "@/components/button/Button";

function Home() {
  const [pacotes, setPacotes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/pacotes");
        const data = await response.json();
        setPacotes(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-center min-h-hero"
        style={{
          backgroundImage: `url('/hero-image-desktop-min.png')`,
        }}
      >
        <GridContainer>
          <div className="flex flex-col justify-center items-center">
            <h1 className={styles.title}>RochaTour</h1>
            <p className={styles.paragraph}>
              Faça a sua viagem dos sonhos com a gente!
            </p>
            <Button
              href={"/destino"}
              name="Ver destinos"
              className="mt-8 bg-slate-900 rounded-md p-2"
            />
          </div>
        </GridContainer>
      </div>
      <div
        className="bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url('/wave.svg')`,
        }}
      >
        <GridContainer className="flex items-center flex-col justify-center ">
          <h2 className={styles.titleDestinos}>
            Os melhores destinos pra você
          </h2>
          <GridContainer className="flex  flex-col justify-center items-center gap-3 930:flex-row">
            {pacotes.length > 0 ? (
              pacotes
                .slice(0, 3)
                .map(pacote => (
                  <Card
                    key={pacote.id}
                    destino={pacote.destino}
                    preco={pacote.preco}
                    imagem={pacote.urlImg}
                  />
                ))
            ) : (
              <GridContainer className="flex  flex-col justify-center items-center">
                <p>Não há pacotes disponíveis no momento.</p>
                <Button
                  href="/pacoteForm"
                  name="Cadastre"
                  className="bg-blue-600 rounded-md mt-2 p-1
                   "
                ></Button>
              </GridContainer>

              // Outro conteúdo ou mensagem para quando não houver dados
            )}
          </GridContainer>
          <Button
            href="/destino"
            name="Ver Todos"
            className="mt-10 bg-black p-2 rounded-md"
          />
        </GridContainer>
      </div>
    </div>
  );
}

export default Home;
