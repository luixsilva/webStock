import React from "react";
import { Field } from "../../../components/Fields/TextFieldDefault";

export const Login = () => {
  return (
    <>
      <div>
        <Field
          label="Usuário"
          type="text"
          name="user"
          id="nome"
          placeholder="Digite seu usuário"
        />
        <Field
          label="Senha"
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
        />
      </div>
    </>
  );
};
