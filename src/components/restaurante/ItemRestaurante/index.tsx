import { useState } from "react"
import { ItemCardapioType } from "../../../models/RestauranteClass"
import * as stl from './styles'


export const ItemCardapio = (props: ItemCardapioType) => {

    const [isVisible, setisVisible] = useState(false)

    const converterReal = (preco: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style:'currency',
            currency:'BRL'
        }).format(preco);
    }

    return(
        <>
        <stl.PopupContainer onClick={() => setisVisible(false)} $isVisible={isVisible}>

                <stl.PopupContent className="container">
                    <img src={props.foto} alt="" />
                    <div>
                        <h2>{props.nome}</h2>
                        <p>{props.descricao}</p>
                        <p>{`Serve de: ${props.porcao}`}</p>
                        <stl.Button>{`Adicionar ao carrinho - ${converterReal(props.preco)}`}</stl.Button>
                    </div>
                </stl.PopupContent>

        </stl.PopupContainer>

        <stl.ItemCardapioContainer>
        <img src={props.foto}/>
        <stl.Titulo>{props.nome}</stl.Titulo>
        <stl.Descricao>{props.descricao.slice(0, 150) + '...'}</stl.Descricao>
        <stl.Button onClick={ () => setisVisible(true) }>Quero mais detalhes!</stl.Button>
        </stl.ItemCardapioContainer>
        </>
    )


}