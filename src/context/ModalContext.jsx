import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    // state para el provider
    const [idReceta, guardarIdReceta] = useState(null);
    const [ingredientes, guardarIngredientes] = useState({});

    const obtenerReceta = async () =>{
        if(!idReceta) return;

        const url= `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
        
        const receta_api = await axios.get(url);

        guardarIngredientes(receta_api.data.drinks[0])
    }

    useEffect(()=>{
        obtenerReceta();
    },[idReceta])

    return (
        <ModalContext.Provider
            value={{
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>

     );
}
 
export default ModalProvider;