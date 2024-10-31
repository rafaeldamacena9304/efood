import { RootState } from "../../../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { add, open } from "../../../redux/Cart/cartReducer"
import { useState } from "react"

import { ItemCardapioType } from "../../../models/RestauranteClass"

import * as stl from './styles'
import close from '../../../assets/images/close.png'

export const ItemCardapio = (props: ItemCardapioType) => {

    const dispatch = useDispatch()

    const { items, isOpen } = useSelector((state: RootState) => state.cart)

    const adicionarAoCarrinho = () => {
        dispatch(add(props))
        dispatch(open())
    }

    const [isVisible, setIsVisible] = useState(false)

    const converterReal = (preco: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style:'currency',
            currency:'BRL'
        }).format(preco);
    }

    return(
        <>
        <stl.PopupContainer onClick={() => setIsVisible(false)} $isVisible={isVisible}>

                <stl.PopupContent className="container">
                    <img src={props.foto} alt="" />
                    <div>
                        <div className="tituloContainer">
                            <h2>{props.nome}</h2>
                            <img onClick={() => setIsVisible(false)} src={close} alt="" />
                        </div>
                        <p>{props.descricao}</p>
                        <p>{`Serve de: ${props.porcao}`}</p>
                        <stl.Button onClick={adicionarAoCarrinho}>{`Adicionar ao carrinho - ${converterReal(props.preco)}`}</stl.Button>
                    </div>
                </stl.PopupContent>

        </stl.PopupContainer>

        <stl.ItemCardapioContainer>
        <img src={props.foto}/>
        <stl.Titulo>{props.nome}</stl.Titulo>
        <stl.Descricao>{props.descricao.slice(0, 150) + '...'}</stl.Descricao>
        <stl.Button onClick={ () => setIsVisible(true) }>Quero mais detalhes!</stl.Button>
        </stl.ItemCardapioContainer>
        </>
    )


}