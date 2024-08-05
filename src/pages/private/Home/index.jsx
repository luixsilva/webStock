import React from "react";
import { Typography } from "../../../components/Typograpghy";
import { Grid, GridItem } from "../../../components/Grid";
import { NavBar } from "../../../components/NavBar";

export const Home = () => {
    return (<>
        <div className="home-container">
            <Grid display="flex" direction="flex-row" spacing="2">
                <GridItem xs={12} md={12} lg={12}>
                    <NavBar></NavBar>
                </GridItem>
            </Grid>
            <Grid display="flex">

                <GridItem xs={12} md={12} lg={12}>
                    <Typography variant="h3" align="center">Coffe Stock</Typography>
                </GridItem>
            </Grid>
        </div>
    </>)
}