import React,{Fragment} from 'react';
import {AppBar,Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Formulario from './Formulario';

const useStyles = makeStyles((theme) =>({
    root: {
        textAlign: 'center',
    },
    tittle: {
        marginTop: 10,
        marginBottom: 10,
    },

}));

const Header = () => {

    const classes = useStyles();

    return ( 
        <Fragment>
            <AppBar className={classes.root} color="primary">
                <Typography className={classes.tittle} variant="h5">
                    Busca recetas de bebidas
                </Typography>
            </AppBar>
        </Fragment>
     );
}
 
export default Header;