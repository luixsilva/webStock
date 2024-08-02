import React from "react";
import { Typography } from "../../../components/Typograpghy";
import { Field } from "../../../components/Fields/TextFieldDefault";
import { Grid, GridItem } from "../../../components/Grid";
import { Button } from "../../../components/Button";
import coffeStockLogo from "../../../assets/coffeStockLogo.png";
import returnButton from "../../../assets/returnButton.png";
import { Link } from "../../../components/Link";

import { autenticateService } from "../../../services/autenticate";

export const Register = () => {
  const handleRegister = async () => {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    const { data } = await autenticateService.register({
      name: nome,
      email: email,
      password: senha,
    });
    console.log("Autenticado", nome, senha, email);
  };
  return (
    <>
      <div className="login-container">
        <Grid display="flex" direction="flex-column" spacing="2">
          <GridItem xs={12} md={4} lg={2}>
            <GridItem xs={12} md={4} lg={1}>
              <Link href="/">
                <img className="back-button" src={returnButton} alt="" />
              </Link>
            </GridItem>
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
            <Field type="email" name="email" id="email" placeholder="Email" />
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
              onClick={handleRegister}
              backgroundColor="#AF8260"
              fullWidth
            >
              Entrar
            </Button>
          </GridItem>
        </Grid>
      </div>
    </>
  );
};
