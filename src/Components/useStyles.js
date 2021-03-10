import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    palette: {
        type: 'dark',
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1.75),
        textAlign: 'left',
        backgroundColor: 'white',
        color: 'black',
    },
    project: {
        padding: theme.spacing(0.25),
        textAlign: 'left',
        backgroundColor: 'white',
        color: 'black',
    },
}));

export default useStyles;
