
import { Footer } from '../../components/geral/Footer'
import { Spinner } from '../../components/geral/Spinner'
import { Hero } from '../../components/home/Hero'
import { ListaProdutos } from '../../components/home/ListaRestaurantes'
import { useGetListaRestaurantesQuery } from '../../services/api'




export const Home = () => {
    
    const { data: restaurantes = [], isLoading } = useGetListaRestaurantesQuery();



    return(
        <>
        {isLoading ? 
            (<Spinner />)
            :
        (
            <>
            <Hero/>
            <ListaProdutos restaurantes={restaurantes} />
            <Footer/>
            </>
        )
        }
        </>
    )
}