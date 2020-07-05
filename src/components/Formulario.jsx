import React from 'react';
import {Container,
        makeStyles, 
        Typography, 
        Toolbar,
        MenuItem,
        TextField,
        Button
} from '@material-ui/core';

const useStyles = makeStyles( (theme) => ({
    root:{
        marginTop: 60,
        textAlign: 'center',
    },
    formControl: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Formulario = () => {

    const classes = useStyles();

    return ( 
        <Container className={classes.root}>
            <Typography variant="subtitle1">
                Busca bebida por categoria o ingrediente
            </Typography>
            <Toolbar>
                <form 
                    className={classes.formControl}
                    autoComplete="off"
                >
                    <TextField 
                        id="outlined-basic" 
                        label="Ingrediente" 
                        variant="outlined"
                        required
                    />


                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Categoria"
                        helperText="Seleccione categoria"
                        variant="outlined"
                        required
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </TextField>
                    <Button variant="outlined" color="primary">
                        Buscar Bebida
                    </Button>
                </form>
            </Toolbar>
        </Container>
     );
}
 
export default Formulario;