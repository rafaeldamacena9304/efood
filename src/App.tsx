import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home';

import { GlobalStyle } from './globalStyle';
import { Restaurante } from './pages/Restaurante';
import { Cart } from './components/carrinho/Cart';

const rotas = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/restaurante/:id',
    element: <Restaurante/>
  }
])

function App() {
  return (
    <>
    <GlobalStyle/>
    <Cart />
    <RouterProvider router={rotas}/>
    </>
  );
}

export default App;
