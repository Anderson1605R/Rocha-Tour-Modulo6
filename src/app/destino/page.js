"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/button/Button";
import Card from "@/components/card/Card";
import GridContainer from "@/components/grid/GridContainer";
import styles from "../../styles/home.module.css";

function Page() {
  const [pacotes, setPacotes] = useState([]);
  const [filteredPacotes, setFilteredPacotes] = useState([]);
  const [searchDestino, setSearchDestino] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/pacotes");
        const data = await response.json();
        setPacotes(data);
        setFilteredPacotes(data); // Inicializa os pacotes filtrados com todos os pacotes da API
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (searchDestino.trim() === "") {
      setFilteredPacotes(pacotes);
    } else {
      const searchTerm = searchDestino.toLowerCase(); // Converter o termo de pesquisa para minúsculas
      const filtered = pacotes.filter(
        pacote => pacote.destino.toLowerCase() === searchTerm
      );
      setFilteredPacotes(filtered);
    }
  }, [searchDestino, pacotes]);

  return (
    <div>
      <div
        className="bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url('/waveBottom.svg')`,
        }}
      >
        <GridContainer className="flex items-center flex-col justify-center   ">
          <h2 className={styles.titleDestinos}>
            Todos os destinos disponíveis
          </h2>
          <input
            className="mb-3 p-1 text-center"
            type="text"
            placeholder="Pesquise seu destino"
            value={searchDestino}
            onChange={e => setSearchDestino(e.target.value)}
          />
          <GridContainer className="flex  flex-col justify-center items-center gap-3 flex-wrap 930:flex-row">
            {(searchDestino.trim() === "" ? pacotes : filteredPacotes).map(
              pacote => (
                <Card
                  key={pacote.id}
                  destino={pacote.destino}
                  preco={pacote.preco}
                  imagem={pacote.urlImg}
                />
              )
            )}
            {searchDestino.trim() !== "" && filteredPacotes.length === 0 && (
              <GridContainer className="flex  flex-col justify-center items-center">
                <p>Não há pacotes disponíveis para este destino.</p>
              </GridContainer>
            )}
          </GridContainer>
          <Button
            href="/pacoteForm"
            name="Cadastre seu pacote"
            className="bg-black p-2 mt-10 rounded-md"
          />
        </GridContainer>
      </div>
    </div>
  );
}

export default Page;
