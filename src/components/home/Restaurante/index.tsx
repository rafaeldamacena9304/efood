import { RestauranteClass } from "../../../models/RestauranteClass"

import * as stl from './styles'

import star from '../../../assets/images/star.png'


export const Restaurante = (restaurante: RestauranteClass) => {

    return(
        <stl.Restaurante>
            <stl.TagContainer>
                {restaurante.destacado && 
                <stl.Tag>Destaque da semana</stl.Tag>    
                }
                <stl.Tag>{restaurante.tipo}</stl.Tag>
            </stl.TagContainer>
            <img src={restaurante.capa} alt=""/>
            <stl.NomeContainer>
                <span>{restaurante.titulo}</span>
                <stl.AvaliacaoContainer>{restaurante.avaliacao}<img src={star} alt=""/></stl.AvaliacaoContainer>
            </stl.NomeContainer>
            <stl.Descricao>{restaurante.descricao}</stl.Descricao>
            <stl.Button to={`/restaurante/${restaurante.id}`}>Saiba mais</stl.Button>
        </stl.Restaurante>
    )
}