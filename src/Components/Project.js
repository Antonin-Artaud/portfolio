import React from "react";
import DesignComponentProject from "./DesignComponent/DesignComponentProject";
import Chat from "../../src/Video/Tchat.mp4";
import Pacman from "../../src/Video/Pacman.mp4";
import ChatImage from "../../src/Image/chat.png";
import PacmanImage from '../Image/Pacman.png';
import {Grid, Paper} from "@material-ui/core";
import useStyles from "./useStyles";
import {makeStyles} from "@material-ui/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStylesCard = makeStyles({
    root: {
        maxWidth: 'xl',
        maxHeight: 'lg',
    },
    media: {
        height: 150,
    },
});

function CardCustom(props) {
    const classes = useStylesCard();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    component="img"
                    alt="Image du projet"
                    height="140"
                    image={props.srcImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" align={'center'} component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align={'left'} component="p">
                        {props.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing={false}>
                {props.modal}
            </CardActions>
        </Card>
    )
}

function Project(){
    const classes = useStyles();
    return (
        <>
            <h1>Projets réalisés</h1>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} xl={4} lg={6}>
                        <Paper className={classes.project}>
                            <CardCustom
                                title={'Programme de communication multi-client en C (Unix)'}
                                srcImage={ChatImage}
                                content={'Dans le cadre de mon stage Août 2020 pour CampusID, j\'ai du réalisé un tchat sous unix' +
                                ' avec ihm en C (GTK). J\'ai du apprendre à utiliser les processus léger d\'unix + les sémaphores (première utilisation / découverte).' +
                                ' J\'ai rencontré une difficulté sur la gestion simultanée des clients (gérer la perte de connection, faire un keep-alive).' +
                                ' J\'ai su ensuite trouvé une solution toute à fait viable.'}
                                modal={
                                    <DesignComponentProject
                                        setTitle={'Programme de communication multi-client en C (Unix)'}
                                        srcVideo={Chat}
                                        linkGithub={'https://github.com/Antonin-Artaud/Project-C/tree/master/Socket'}
                                    />
                                }
                                date={'10/09/2019'}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} xl={4} lg={6}>
                        <Paper className={classes.project}>
                            <CardCustom
                                title={'Pacman en C (Unix)'}
                                srcImage={PacmanImage}
                                content={'Voici un projet de première année. Il s\'agit d\'un jeu coder en C, je me suis inspiré de la base du pacman.\n' +
                                ' J\'ai 3 versions de disponible de ce projet l\'une via une api fournit par notre professeur, l\'une avec GTK/CAIRO, et une dernière\n' +
                                ' qui utilise SDL (dans cette versions absolument tout est fait au plus bas niveau). J\'ai utilisé un algorithme pathfinder pour les ennemis\n' +
                                ' pour trouver le chemin le plus court possible entre les ennemis et le joueur à chaque déplacement.'}
                                modal={
                                    <DesignComponentProject
                                        setTitle={'Pacman en C (Unix)'}
                                        srcVideo={Pacman}
                                        linkGithub={'https://github.com/Antonin-Artaud/Project-C/tree/master/Pacman'}
                                    />
                                }
                                date={'20/07/2019'}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} xl={4} lg={6}>
                        <Paper className={classes.project}>
                            <CardCustom
                                title={'Portfolio (React.js)'}
                                srcImage={PacmanImage}
                                content={"Dans le cadre de mon école j'ai été amener à réaliser un portfolio. J'ai donc" +
                                " choisis d'utiliser le framework React.js que j'affectionne particulièrement"}
                                modal={
                                    <Button
                                        href={'https://github.com/Antonin-Artaud/portfolio'}
                                        variant={'contained'}
                                        target={'_bank'}
                                        color="primary"
                                        size="medium"
                                        autoFocus>
                                        Github code
                                    </Button>
                                }
                                date={'07/03/2021'}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Project;
