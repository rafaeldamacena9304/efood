import { useParams } from "react-router-dom";
import { Header } from "../../components/restaurante/Header";
import { Cardapio } from "../../components/restaurante/Cardapio";
import { Footer } from "../../components/geral/Footer";
import { BannerRestaurante } from "../../components/restaurante/BannerRestaurante";
import { useGetRestauranteQuery } from "../../services/api";
import { Spinner } from "../../components/geral/Spinner";

export const Restaurante = () => {
    
    const { id } = useParams();
    

    const { data: restaurante, isLoading } = useGetRestauranteQuery(id);


    return(
        <>
            {isLoading ? 
                (<Spinner/>)
                :
                <>
                <Header/>
                <BannerRestaurante imagem={restaurante?.capa || ''} tipo={restaurante?.tipo || ''} nome={restaurante?.titulo || ''}/>
                <Cardapio cardapio={restaurante?.cardapio || []} />
                <Footer/>
                </>
            }
        </>
    )

}