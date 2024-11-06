import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    :root{
    --rosa:#E66767;
    --branco:#FFF8F2;
    --rosaClaro:#FFEBD9;
}
@font-face {
    font-family: 'Geist';
    src: url('/fonts/Geist-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Geist';
    src: url('/fonts/Geist-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

*, *::before, *::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Geist', sans-serif;
}
.container{
    margin:0 auto;
    max-width:1024px;
    width:100%;
}
body{
    background-color:var(--branco);
}
`
