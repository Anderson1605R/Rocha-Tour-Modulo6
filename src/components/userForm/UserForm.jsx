"use client";
import React, { useState } from "react";
import { object, string } from "zod";
import styles from "./userForm.module.css";

const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

const userFormSchema = object({
  floating_email: string().email({
    message: "Por favor, insira um e-mail válido",
  }),
  floating_password: string().min(6, {
    message: "A senha deve ter no mínimo 6 caracteres",
  }),
  floating_repeat_password: string()
    .min(6)
    .refine((value, { floating_password }) => value === floating_password, {
      message: "A confirmação de senha deve ser igual à senha",
      path: ["floating_repeat_password"],
    }),
  floating_cpf: string().length(11, { message: "O CPF deve ter 11 dígitos" }),
  floating_birth_date: string().refine(
    value => {
      const dateOfBirth = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - dateOfBirth.getFullYear();

      return age >= 18;
    },
    {
      message: "Você deve ter no mínimo 18 anos de idade",
      path: ["floating_birth_date"],
    }
  ),
});

function UserForm() {
  const [formData, setFormData] = useState({
    floating_email: "",
    floating_password: "",
    floating_repeat_password: "",
    floating_cpf: "",
    floating_birth_date: "",
  });

  const [errors, setErrors] = useState({
    floating_email: "",
    floating_password: "",
    floating_repeat_password: "",
    floating_cpf: "",
    floating_birth_date: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));

    try {
      userFormSchema
        .pick({ [name]: userFormSchema.shape[name] })
        .parse({ [name]: value });
      setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      const errorMessage = error.errors?.[0]?.message || "";
      setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
    }

    if (name === "floating_repeat_password") {
      if (value !== formData.floating_password) {
        setErrors(prevErrors => ({
          ...prevErrors,
          passwordMatchError: "Senha não confere",
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          passwordMatchError: "",
        }));
      }
    }

    validateForm();
  };

  const validateForm = () => {
    const formErrors = Object.values(errors).filter(error => error !== "");
    setFormValid(formErrors.length === 0);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Enviar o formulário somente se formValid for true
    if (formValid) {
      // Lógica para enviar o formulário
      console.log("Formulário enviado!");
    }
  };

  return (
    <div>
      <h1 className={styles.formTitle}>Cadastro</h1>
      <form
        className={`max-w-md w-96 mx-auto ${styles.formContainer}`}
        onSubmit={handleSubmit}
      >
        <div className={`relative z-0 w-full mb-5 group ${styles.formGroup}`}>
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${styles.input}`}
            placeholder=" "
            value={formData.floating_email}
            onChange={handleInputChange}
            required
          />
          {errors.floating_email && (
            <span className="text-red-600 text-xs">
              {errors.floating_email}
            </span>
          )}
          <label
            htmlFor="floating_email"
            className={`peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${styles.label}`}
          >
            Email
          </label>
        </div>
        <div className={`relative z-0 w-full mb-5 group ${styles.formGroup}`}>
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${styles.input}`}
            placeholder=" "
            value={formData.floating_password}
            onChange={handleInputChange}
            required
          />
          {errors.floating_password && (
            <span className="text-red-600 text-xs">
              {errors.floating_password}
            </span>
          )}
          <label
            htmlFor="floating_password"
            className={`peer-focus:font-medium absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${styles.label}`}
          >
            Senha
          </label>
        </div>
        <div className={`relative z-0 w-full mb-5 group ${styles.formGroup}`}>
          <input
            type="password"
            name="floating_repeat_password"
            id="floating_repeat_password"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${styles.input}`}
            placeholder=" "
            value={formData.floating_repeat_password}
            onChange={handleInputChange}
            required
          />
          {errors.passwordMatchError && (
            <span className="text-red-600 text-xs">
              {errors.passwordMatchError}
            </span>
          )}
          <label
            htmlFor="floating_repeat_password"
            className={`peer-focus:font-medium absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${styles.label}`}
          >
            Confirme a Senha
          </label>
        </div>
        <div className={`relative z-0 w-full mb-5 group ${styles.formGroup}`}>
          <input
            type="text"
            name="floating_cpf"
            id="floating_cpf"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${styles.input}`}
            placeholder=" "
            value={formData.floating_cpf}
            onChange={handleInputChange}
            required
          />
          {errors.floating_cpf && (
            <span className="text-red-600 text-xs">{errors.floating_cpf}</span>
          )}
          <label
            htmlFor="floating_cpf"
            className={`peer-focus:font-medium absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${styles.label}`}
          >
            CPF
          </label>
        </div>
        <div className={`relative z-0 w-full mb-5 group ${styles.formGroup}`}>
          <input
            type="date"
            name="floating_birth_date"
            id="floating_birth_date"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${styles.input}`}
            placeholder=" "
            value={formData.floating_birth_date}
            onChange={handleInputChange}
            required
          />
          {errors.floating_birth_date && (
            <span className="text-red-600 text-xs">
              {errors.floating_birth_date}
            </span>
          )}
          <label
            htmlFor="floating_birth_date"
            className={`peer-focus:font-medium absolute text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${styles.label}`}
          >
            Data de Nascimento
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

export default UserForm;
