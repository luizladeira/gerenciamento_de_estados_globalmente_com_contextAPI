export const ADD_PRODUTO = "ADD_PRODUTO";
export const REMOVE_PRODUTO = "REMOVE_PRODUTO";
export const UPDATE_QUANTIDADE = "UPDATE_QUANTIDADE";

export const carrinhoReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUTO:
            const novoProduto = action.playload
            const produto = state.findIndex( item => item.id === novoProduto.id);

            if (produto === -1) {
                novoProduto.quantidade = 1;
                return [...state, novoProduto];
            } else {
                return state.map((item, index) => {
                    return index === produto ? { ...item, quantidade: item.quantidade + 1 } : item
                });
            }

        case REMOVE_PRODUTO:
            const produtoId = action.playload;
            return state.filter( item => item.id !== produtoId);

        case UPDATE_QUANTIDADE:
            const { produtoId: id, quantidade } = action.playload;
            return state.map( item => item.produto = id && quantidade > 1 ? { ...item, quantidade: item.quantidade } : item);

        default:
            return state;
    }
};