import { ItemCardapioType } from "../../../models/RestauranteClass"
import * as stl from './styles'


export const ItemCardapio = (props: ItemCardapioType) => {
    
    return(
        <stl.ItemCardapioContainer>
        <img src={props.foto}/>
        <stl.Titulo>{props.nome}</stl.Titulo>
        <stl.Descricao>{props.descricao}</stl.Descricao>
        <stl.Button to="/">Adicionar ao carrinho</stl.Button>
    </stl.ItemCardapioContainer>
    )


}