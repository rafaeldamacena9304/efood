import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { close, remove } from '../../../redux/Cart/cartReducer'

import * as stl from "./styles"

import lixeira from '../../../assets/images/lixeira.png'


export const Cart = () => {

    const dispatch = useDispatch()

    const { isOpen, items } = useSelector((state:RootState) => state.cart)

    const fecharCarrinho = () => {
        dispatch(close())
    }

    const removerItem = (id: number) => {
        dispatch(remove(id))
    }
    
    const converterReal = (preco: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style:'currency',
            currency:'BRL'
        }).format(preco);
    }

    const valorTotal = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco)
        }, 0)
    }

    if (isOpen === true){
        return(
            <stl.CartContainer>
                <stl.Overlay onClick={fecharCarrinho} />
                    <stl.Cart>
                        {items.map(item => (
                            <stl.CartItem>
                                <img src={item.foto} alt="" />
                                <div>
                                    <h3>{item.nome}</h3>
                                    <p>{converterReal(item.preco)}</p>
                                </div>
                                <img onClick={() => removerItem(item.id)} className="excluir" src={lixeira} alt="" />
                            </stl.CartItem>
                        ))}
                       
                        <stl.PrecoTotal>
                                <span>Valor total</span>
                                <span>{converterReal(valorTotal())}</span>
                            </stl.PrecoTotal>
                            <stl.Button>Continuar com a compra</stl.Button>
                    </stl.Cart>
            </stl.CartContainer>
        )
    }
    return <></>
}