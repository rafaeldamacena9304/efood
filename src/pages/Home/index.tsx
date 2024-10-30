import { useEffect, useState } from 'react'
import { Footer } from '../../components/geral/Footer'
import { Hero } from '../../components/home/Hero'
import { ListaProdutos } from '../../components/home/ListaRestaurantes'
import { RestauranteClass } from '../../models/RestauranteClass'




export const Home = () => {
    
    const [restaurantes, setRestaurantes] = useState<RestauranteClass[]>([])

    useEffect( () => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(resposta => resposta.json())
        .then(resposta => setRestaurantes(resposta))
    }, [] )

    return(
        <>
        <Hero/>
        <ListaProdutos restaurantes={restaurantes} />
        <Footer/>
        </>
    )
}