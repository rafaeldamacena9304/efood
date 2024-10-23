import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home';

import { GlobalStyle } from './globalStyle';
import { Restaurante } from './pages/Restaurante';

const rotas = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/restaurante/:tipo',
    element: <Restaurante/>
  }
])

function App() {
  return (
    <>
    <GlobalStyle/>
    <RouterProvider router={rotas}/>
    </>
  );
}

export default App;
