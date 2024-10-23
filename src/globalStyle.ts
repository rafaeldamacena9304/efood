import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    :root{
    --rosa:#E66767;
    --branco:#FFF8F2;
}

*, *::before, *::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Roboto', sans-serif;
}
.container{
    margin:0 auto;
    max-width:1024px;
    width:100%;
}
body{
    background-color:var(--branco)
}
`
