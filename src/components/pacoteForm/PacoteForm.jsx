"use client";
import React, { useState } from "react";
import styles from "../userForm//userForm.module.css";

function PacoteForm() {
  const [formData, setFormData] = useState({
    destino: "",
    preco: "",
    urlImg: "",
    dataIda: "",
    dataVolta: "",
  });

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/pacotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.replace("/destino");
      } else {
        console.error("Erro ao cadastrar o pacote:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao cadastrar o pacote:", error);
    }
  };
  const handleChange = event => {
    const { name, value } = event.target;
    const newValue = name === "preco" ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: newValue });
  };
  return (
    <div>
      <h1 className={styles.formTitle}>Cadastro de Pacotes</h1>
      <form
        onSubmit={handleSubmit}
        className={`max-w-md w-96 mx-auto ${styles.formContainer}`}
      >
        <div className={`relative z-0 w-full mb-5 group ${styles.formGroup}`}>
          <input
            type="text"
            name="destino"
            id="destino"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${styles.input}`}
            placeholder=" "
            value={formData.destino}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="destino"
            className={`peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${styles.label}`}
          >
            Destino
          </label>
        </div>
        <div className={`relative z-0 w-full mb-5 group ${styles.formGroup}`}>
          <input
            type="number"
            name="preco"
            id="preco"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${styles.input}`}
            placeholder=" "
            value={formData.preco}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="preco"
            className={`peer-focus:font-medium absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${styles.label}`}
          >
            Preço
          </label>
        </div>
        <div className={`relative z-0 w-full mb-5 group ${styles.formGroup}`}>
          <input
            type="text"
            name="urlImg"
            id="urlImg"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${styles.input}`}
            placeholder=" "
            value={formData.urlImg}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="urlImg"
            className={`peer-focus:font-medium absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${styles.label}`}
          >
            URL da imagem
          </label>
        </div>

        <div className={`relative z-0 w-full mb-5 group ${styles.formGroup}`}>
          <input
            type="date"
            name="dataIda"
            id="dataIda"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${styles.input}`}
            placeholder=" "
            value={formData.dataIda}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="dataIda"
            className={`peer-focus:font-medium absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${styles.label}`}
          >
            Data de saida
          </label>
        </div>
        <div className={`relative z-0 w-full mb-5 group ${styles.formGroup}`}>
          <input
            type="date"
            name="dataVolta"
            id="dataVolta"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${styles.input}`}
            placeholder=" "
            value={formData.dataVolta}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="dataVolta"
            className={`peer-focus:font-medium absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${styles.label}`}
          >
            Data da volta
          </label>
        </div>
        <button
          type="submit"
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${styles.submitButton}`}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default PacoteForm;
