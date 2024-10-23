import { useParams } from "react-router-dom";
import { Header } from "../../components/restaurante/Header";
import { Cardapio } from "../../components/restaurante/Cardapio";
import { restaurantes } from "../Home";
import { Footer } from "../../components/geral/Footer";
import { BannerRestaurante } from "../../components/restaurante/BannerRestaurante";

export const Restaurante = () => {
    
    const { tipo } = useParams<{ tipo: string}>();
    const restaurante = restaurantes.find(restaurante => restaurante.tipo === tipo)
    return(
        <>
            <Header/>
            <BannerRestaurante imagem={restaurante?.backgroundImage || ''} tipo={restaurante?.tipo || ''} nome={restaurante?.nome || ''}/>
            <Cardapio cardapio={restaurante?.cardapio || []} />
            <Footer/>
        </>
    )

}