import { Restaurante } from "../Restaurante"

import { RestauranteClass } from "../../../models/RestauranteClass"

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
                    destacado={restaurante.destacado}
                    titulo={restaurante.titulo} 
                    descricao={restaurante.descricao}
                    avaliacao={restaurante.avaliacao}
                    imagem={restaurante.imagem}
                    tipo={restaurante.tipo}
                    capa={restaurante.capa}
                />
            ))}
        </stl.ListaRestaurantes>
        </div>
    </stl.ListaRestaurantesContainer>
)