import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [busqueda, guardarBusqueda] = useState({
        ingrediente:'',
        categoria:''
    });
    const [recetas, buscarRecetas] = useState([]);

    return(
        <RecetasContext.Provider
            value={{
                buscarRecetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;