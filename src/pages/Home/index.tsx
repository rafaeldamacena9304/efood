import { Footer } from '../../components/geral/Footer'
import { Hero } from '../../components/home/Hero'
import { ListaProdutos } from '../../components/home/ListaRestaurantes'
import { RestauranteClass } from '../../models/RestauranteClass'
import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'
import pizza from '../../assets/images/pizza.png'
import barcaSushi from '../../assets/images/barcaSushi.jpeg'
import bannerItaliano from '../../assets/images/bannerItaliano.png'
import bannerJapones from '../../assets/images/bannerJapones.jpg'


export const restaurantes: RestauranteClass[] = [
    {
        id:1,
        nome:'Hioki Sushi',
        descricao:'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        imagem: sushi,
        infos: ['Japonês', 'Oferta do dia'],
        avaliacao: 4.9,
        cardapio: [
            {
                nome: 'Barca de Sushi Grande',
                descricao: 'Uma barca grande de sushi com todos os sabores da casa',
                preco: 129.90,
                imagem:barcaSushi
            }
        ],
        tipo:'japones',
        backgroundImage: bannerJapones
    },
    {
        id:2,
        nome:'La Dolce Vita Trattoria',
        descricao:'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: macarrao,
        infos: ['Italiano', 'Mais pedido'],
        avaliacao: 5.0,
        cardapio: [
            {
                nome: 'Pizza Marguerita',
                descricao: 'UA clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
                preco: 79.90,
                imagem:pizza
            }
        ],
        tipo: 'italiano',
        backgroundImage: bannerItaliano
    }
]

export const Home = () => {

    return(
        <>
        <Hero/>
        <ListaProdutos restaurantes={restaurantes} />
        <Footer/>
        </>
    )
}