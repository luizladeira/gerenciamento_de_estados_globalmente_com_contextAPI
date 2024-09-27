import { createContext, useReducer, useState } from "react";
import { carrinhoReducer } from "../reducers/carrinhoReducer";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";
const estadoInicial = [];

//Componente
export const CarrinhoProvider = ({ children }) => {

    const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial);
    const [quantidade, setQuantidade] = useState(0); //novo estado
    const [valorTotal, setValorTotal] = useState(0); //novo estado

    return (
        <CarrinhoContext.Provider value={{ carrinho, dispatch, quantidade, valorTotal }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

