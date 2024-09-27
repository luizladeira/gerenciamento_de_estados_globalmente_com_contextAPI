import { useContext, useEffect, useMemo } from "react";
import { CarrinhoContext } from '@/context/CarrinhoContext';

export const useCarrinhoContext = () => {

    const { carrinho, setCarrinho, quantidade, setQuantidade, valorTotal, setValorTotal } = useContext(CarrinhoContext);

    function mudarQuantidade(id, quantidade) {
        return carrinho.map((itemDoCarrinho) => {
            if (itemDoCarrinho.id === id) {
                itemDoCarrinho.quantidade += quantidade;
            }
            return itemDoCarrinho;
        })
    }

    function adicionarProduto(novoProduto) {
        const temOProduto = carrinho.some((itemCarrinho) => {
            return itemCarrinho.id === novoProduto.id;
        });

        if (!temOProduto) {
            novoProduto.quantidade = 1;
            return setCarrinho((carrinhoAnterior) => [
                ...carrinhoAnterior,
                novoProduto
            ]);
        }

        const carrinhoAtualizado = mudarQuantidade(novoProduto.id, 1);

        setCarrinho([...carrinhoAtualizado]);
    }

    function removerProduto(id) {
        const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);
        const ehOUltimo = produto.quantidade === 1;

        if (ehOUltimo) {
            return setCarrinho((carrinhoAnterior) => carrinhoAnterior.filter(
                (itemDoCarrinho) => itemDoCarrinho.id !== id)
            );
        }

        const carrinhoAtualizado = mudarQuantidade(id, -1);
        setCarrinho([...carrinhoAtualizado]);
    }

    function removerProdutoCarrinho(id) {
        const produto = carrinho.filter((itemDoCarrinho) => { return itemDoCarrinho.id !== id })
        setCarrinho(produto);
    }

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

    //CLOSE reduce 

    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto,
        removerProdutoCarrinho,
        valorTotal,
        quantidade,
    }
}