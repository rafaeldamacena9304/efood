import { RestauranteClass } from "../../../models/RestauranteClass"
import { Restaurante } from "../Restaurante"
import * as stl from './styles'

interface ListaRestaurantesProps{
    restaurantes: RestauranteClass[]
}

export const ListaProdutos = ({ restaurantes }: ListaRestaurantesProps) => (
    <stl.ListaRestaurantesContainer>
        <div className="container">
        <stl.ListaRestaurantes>
            {restaurantes.map(restaurante => (
                <Restaurante
                    key={restaurante.id}
                    id={restaurante.id}
                    infos={restaurante.infos} 
                    nome={restaurante.nome} 
                    descricao={restaurante.descricao}
                    avaliacao={restaurante.avaliacao}
                    imagem={restaurante.imagem}
                    tipo={restaurante.tipo}
                    backgroundImage={restaurante.backgroundImage}
                />
            ))}
        </stl.ListaRestaurantes>
        </div>
    </stl.ListaRestaurantesContainer>
)