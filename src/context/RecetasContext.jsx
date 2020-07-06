import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, guardarRecetas] = useState([]);

    const [busqueda, buscarRecetas] = useState({
        nombre:'',
        categoria:''
    });

    const [consultar, guardarConsultar] = useState(false);

    const {nombre, categoria} = busqueda;

    const obtenerRecetas = async() => {
            let url =``;
            // `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
            if(nombre === '' && categoria.length >0){
                
                url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`;
            
            }else if(nombre.length > 0 && categoria === ''){

                url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}`;
            
            }else {

                url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
            
            }

            const recetas_api= await axios.get(url);
            guardarRecetas(recetas_api.data.drinks);       
    }

    useEffect(()=> {
        if(consultar){
            obtenerRecetas();
        }
    },[busqueda]);

    return(
        <RecetasContext.Provider
            value={{
                recetas,
                buscarRecetas,
                guardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;