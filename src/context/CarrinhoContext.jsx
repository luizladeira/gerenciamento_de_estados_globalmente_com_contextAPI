import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { carrinhoReducer } from "../reducers/carrinhoReducer";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "ContextoCarrinho";
const estadoInicial = [];

//Componente
export const CarrinhoProvider = ({ children }) => {

    const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial);
    const [quantidade, setQuantidade] = useState(0); //novo estado
    const [valorTotal, setValorTotal] = useState(0); //novo estado

    /* useMemo() ele fica armazenado em cache e só irá mudar se realmente precisar com isso 
    ganhamos em performance sem a necessidade de ficar calculando toda hora que passar nesse trecho.
    */
    const { totalTemporario, quantidadeTemporario } = useMemo(() => {
        return carrinho.reduce((acumulador, produto) => (
            {
                quantidadeTemporario: acumulador.quantidadeTemporario + produto.quantidade,
                totalTemporario: acumulador.totalTemporario + produto.preco * produto.quantidade
            }
        ),
            {
                quantidadeTemporario: 0,
                totalTemporario: 0,
            }

        );
    }, [carrinho]);

    //OPEN reduce - transforma as quantidade dos itens em um unico valor
    /*
    Essa função realiza a soma do valor total e quantidade de intens no carrinho usado para iterar sobre um arry
    e reduzi-lo a um único valorTotal, com base em uma função de acumulação fornecida.
    */
    useEffect(
        () => {
            setQuantidade(quantidadeTemporario);
            setValorTotal(totalTemporario);
        });

    return (
        <CarrinhoContext.Provider value={{ carrinho, dispatch, quantidade, setQuantidade, valorTotal, setValorTotal }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

