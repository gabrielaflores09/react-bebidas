import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';
// Crear context 
export const CategoriasContext = createContext();

// Provider (donde se encuentran las funciones y state)
const CategoriasProvider = (props) => {

    // crear State del context
    const [categorias, guardarCategorias] = useState([]);

    const obtenerCategorias = async () =>{
        const url= `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

        const categorias = await axios.get(url);

        guardarCategorias(categorias.data.drinks)
    }

    useEffect(()=>{
        obtenerCategorias();

    },[])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children} 
        </CategoriasContext.Provider>
    )
    
}

export default CategoriasProvider;