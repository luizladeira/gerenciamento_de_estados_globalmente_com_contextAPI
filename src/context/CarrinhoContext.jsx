import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

//Componente
export const CarrinhoProvider = ({ children }) => {

    const [carrinho, setCarrinho] = useState([]);

    return (
        <CarrinhoContext.Provider value={ { carrinho, setCarrinho } }>
            {children}
        </CarrinhoContext.Provider>
    )
}

