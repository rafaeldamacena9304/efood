import { ItemCardapioType } from "../../../models/RestauranteClass"
import { ItemCardapio } from "../ItemRestaurante"

import * as stl from './styles'

interface CardapioProps{
    cardapio: ItemCardapioType[]
}



export const Cardapio = ({cardapio} : CardapioProps) => {
    
    

    return (
        <div className="container">
            <stl.Cardapio>
                {cardapio.map((cardapioItem: ItemCardapioType) => (
                    <li key={cardapioItem.nome}>
                        <ItemCardapio id={cardapioItem.id}
                            nome={cardapioItem.nome} 
                            descricao={cardapioItem.descricao}
                            preco={cardapioItem.preco}
                            foto={cardapioItem.foto}
                            />
                    </li>
                ))}
        </stl.Cardapio>
    </div>
    )

}