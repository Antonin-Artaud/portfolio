import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from "./Project";
import useStyles from "./useStyles";

function Home() {
    const classes = useStyles();

    return (
        <>
            <h2>Présentation</h2>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>Moi</Paper>
                    </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>Formations</Paper>
                        </Grid>
                        <br/>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>Expériences</Paper>
                        </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>Compétences</Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
                        <Project/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Home;
