import React from 'react'
import {Container, createMuiTheme, Grid, Paper, useMediaQuery} from '@material-ui/core'

import Project from "./Components/Project";

import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import './App.css';
import useStyles from "./Components/useStyles";
import Skills from "./Components/Skills";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

export default function App() {
    const classes = useStyles();

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth={false}>
                <Grid item xs={12}>
                    <div className={classes.root}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <h1>Présentation</h1>
                                <Paper className={classes.paper}>
                                    <Grid container wrap="nowrap" spacing={1}>
                                        <Grid item xs>
                                            <Typography>
                                                Bonjour, je me présente, je m'appel Antonin et je suis un jeune développeur de 19 ans.
                                                J'ai pour passion de concevoir plusieurs sites web ou logiciels à des
                                                fins d'apprentissage et de divertissement. Je suis autodidacte en parallèle de mes
                                                études. J'aime apprendre et m'intéresser à beaucoup de nouvelles technologies
                                                telles que React.js, Node.js par exemple. Je suis quelqu'un qui va essayer de résoudre
                                                des possibles problèmes par moi-même, mais je n'hésite pas à demander de l'aide
                                                quand cela s'avère nécessaire
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <h1>Formation</h1>
                                <Paper className={classes.paper}>
                                    <Grid container wrap="nowrap" spacing={1}>
                                        <Grid item xs>
                                            <Typography>
                                                Campus Sophia Ynov 2020-2021 - Deuxième année de bachelor.
                                                CampusID 2019-2020 - Première année de bachelor.
                                                Lycée les Eucalyptus à Nice 2018/2019 - Bac STI2D.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <br/>
                            <Grid item xs={12} sm={6}>
                                <h1>Expériences</h1>
                                <Paper className={classes.paper}>
                                    <Grid container wrap="nowrap" spacing={1}>
                                        <Grid item xs>
                                            <Typography>
                                                Expériences:
                                                Stage chez CampusID 2020
                                                - Réalisation d'un tchat multi client / serveur en C sous linux. Pour
                                                un projet de "boîte à code" dédié au collégiens. J'ai donc utiliser
                                                GTK3.0 pour réaliser l'ihm du tchat. Le tchat est fonctionnel et
                                                disponible sur mon github.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <h1>Compétences</h1>
                                <Grid container spacing={2}>
                                    <Grid item xs={3} sm={2} md={2} lg={1}>
                                        <Skills accurate={80}/>
                                    </Grid>
                                    <Grid item xs={9} sm={10} md={4} lg={3}>
                                        <Paper className={classes.paper}>
                                            C/C++, C#/Java, PHP
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={3} sm={2} md={2} lg={1}>
                                        <Skills accurate={90}/>
                                    </Grid>
                                    <Grid item xs={9} sm={10} md={4} lg={3}>
                                        <Paper className={classes.paper}>
                                            HTML, CSS, JavaScript
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={3} sm={2} md={2} lg={1}>
                                        <Skills accurate={75}/>
                                    </Grid>
                                    <Grid item xs={9} sm={10} md={4} lg={3}>
                                        <Paper className={classes.paper}>
                                            React.js
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={3} sm={2} md={2} lg={1}>
                                        <Skills accurate={70}/>
                                    </Grid>
                                    <Grid item xs={9} sm={10} md={4} lg={3}>
                                        <Paper className={classes.paper}>
                                            Node.js (API REST)
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
                                <Project/>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
