import React from "react";
import "../login/login.css"
import { Field } from "../../../components/Fields/TextFieldDefault";
import { Grid, GridItem } from "../../../components/Grid";

export const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-grid">
          <Grid display="flex">
            <GridItem xs={12} md={4} lg={4}>
              <Field
                label="Usuário"
                type="text"
                name="user"
                id="nome"
                placeholder="Digite seu usuário"
              />
            </GridItem>
            <GridItem xs={12} md={4} lg={4}>
              <Field
                label="Senha"
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
              />
            </GridItem>
          </Grid>
        </div>
      </div>
    </>
  );
};
