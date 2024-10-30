import { useParams } from "react-router-dom";
import { Header } from "../../components/restaurante/Header";
import { Cardapio } from "../../components/restaurante/Cardapio";
import { Footer } from "../../components/geral/Footer";
import { BannerRestaurante } from "../../components/restaurante/BannerRestaurante";
import { useEffect, useState } from "react";
import { RestauranteClass } from "../../models/RestauranteClass";

export const Restaurante = () => {
    
    const { id } = useParams();
    
    const [restaurante, setRestaurante] = useState<RestauranteClass>();

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then(resposta => resposta.json())
        .then(resposta => setRestaurante(resposta))
    }, [id])


    return(
        <>
            <Header/>
            <BannerRestaurante imagem={restaurante?.capa || ''} tipo={restaurante?.tipo || ''} nome={restaurante?.titulo || ''}/>
            <Cardapio cardapio={restaurante?.cardapio || []} />
            <Footer/>
        </>
    )

}