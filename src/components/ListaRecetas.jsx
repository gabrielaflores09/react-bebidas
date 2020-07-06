import React,{Fragment,useContext, useEffect} from 'react';
import {RecetasContext} from '../context/RecetasContext';
import Receta from './Receta';
import {Grid} from '@material-ui/core';

const ListaRecetas = () => {

    const { recetas } = useContext(RecetasContext);
    return ( 
        <Fragment>
            <Grid 
                direction="row"
                container
                justify="center"
                alignItems="center"
            >
                {recetas && recetas.map(receta =>(
                    <Receta
                        key={receta.idDrink}
                        receta={receta}
                    />
                ))}
            </Grid>
        </Fragment>
        
     );
}
 
export default ListaRecetas;