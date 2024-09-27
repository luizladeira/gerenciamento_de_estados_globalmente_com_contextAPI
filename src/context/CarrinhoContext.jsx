import { createContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

//Componente
export const CarrinhoProvider = ({ children }) => {

    const [carrinho, setCarrinho] = useState([]);
    const [quantidade, setQuantidade] = useState(0); //novo estado
    const [valorTotal, setValorTotal] = useState(0); //novo estado

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho, quantidade, setQuantidade, valorTotal, setValorTotal }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

