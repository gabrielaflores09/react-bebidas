import React,{useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriaContext';
import {RecetasContext} from '../context/RecetasContext';

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
            margin: theme.spacing(2),
        },
        width: '100%',
    },
    txtField:{
        width: 250,

        '@media (max-width: 640px)': {
            width: 200,
        }
    },
}));

const Formulario = () => {

    const classes = useStyles();

    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    });

    const obtenerDatosReceta = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    return ( 
        <Container className={classes.root}>
            <Typography variant="subtitle1">
                Busca bebida por categoria o ingrediente
            </Typography>
            <Toolbar>
                <form 
                    className={classes.formControl}
                    autoComplete="off"
                    onSubmit={e=>{
                        e.preventDefault();
                        buscarRecetas(busqueda);
                        guardarConsultar(true);
                    }}
                >
                    <TextField 
                        className={classes.txtField}
                        id="outlined-basic" 
                        label="Ingrediente"
                        name="nombre" 
                        variant="outlined"
                        onChange={obtenerDatosReceta}
                    />


                    <TextField
                        className={classes.txtField}
                        id="outlined-select-currency"
                        select
                        label="Categoria"
                        name="categoria"
                        variant="outlined"
                        onChange={obtenerDatosReceta}
                    >
                        <MenuItem value="">Seleccione Categoria</MenuItem>
                    {categorias && categorias.map(categoria =>(
                        <MenuItem 
                            key={categoria.strCategory} 
                            value={categoria.strCategory}
                        >
                            {categoria.strCategory}
                        </MenuItem>
                    ))}                    
                    </TextField>
                    {(busqueda.nombre.trim().length>2 ||
                        busqueda.categoria.trim().length >2
                    )? 
                        <Button 
                            variant="outlined" 
                            size="large" 
                            color="primary"
                            type="submit"
                        >
                            Buscar Bebida
                        </Button>
                        :
                        <Button 
                        variant="outlined" 
                        size="large" 
                        color="primary"
                        type="submit"
                        disabled
                        >
                        Buscar Bebida
                        </Button>
                     }
                    
                </form>
            </Toolbar>
        </Container>
     );
}
 
export default Formulario;