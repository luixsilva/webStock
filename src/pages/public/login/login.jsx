import React from "react";
import "../login/login.css";
import { Field } from "../../../components/Fields/TextFieldDefault";
import { Grid, GridItem } from "../../../components/Grid";
import { Button } from "../../../components/Button";
import { Typography } from "../../../components/Typograpghy";
import coffeStockLogo from "../../../assets/coffeStockLogo.png";
import { Link } from "../../../components/Link";

export const Login = () => {
  const handleAutenticated = () => {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("password").value;
    console.log("Autenticado", nome, senha);
  };
  return (
    <>
      <div className="login-container">
        <Grid display="flex" direction="flex-column" spacing="2">
          <GridItem xs={12} md={4} lg={2}>
            <img className="img-login" src={coffeStockLogo} alt="logo" />
          </GridItem>
          <GridItem xs={12} md={4} lg={2}>
            <Typography
              variant="h2"
              align="center"
              className="typography primary"
            >
              Coffee Stock
            </Typography>
          </GridItem>
          <GridItem xs={12} md={4} lg={2}>
            <Field type="text" name="user" id="nome" placeholder="Usuário" />
          </GridItem>
          <GridItem xs={12} md={4} lg={2}>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
            />
          </GridItem>
          <GridItem xs={12} md={4} lg={2}>
            <Button
              onClick={() => handleAutenticated()}
              backgroundColor="#AF8260"
              fullWidth
            >
              Entrar
            </Button>
          </GridItem>
          <GridItem xs={12} md={4} lg={2}>
            <Link href="/register">Ainda não tem cadastro? Realize agora.</Link>
          </GridItem>
        </Grid>
      </div>
    </>
  );
};
