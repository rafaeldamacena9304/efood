import { Link } from "react-router-dom";
import styled from "styled-components";


export const ItemCardapioContainer = styled.div`
    padding:8px;
    background-color:var(--rosa);

    img{
        width:100%;
        height:200px;
        object-fit: cover;
        margin-bottom:8px;
    }
`
export const Titulo = styled.h3`
    font-weight:900;
    color:var(--branco);
    margin-bottom:16px;
`
export const Descricao = styled.p`
    font-size:14px;
    color:var(--branco);
    margin-bottom:8px;
`
export const Button = styled.button`
    background-color:var(--branco);
    color:var(--rosa);
    width:100%;
    display:flex;
    align-items:center;
    justify-content: center;
    padding:4px 0px;
    text-decoration:none;
    border:none;
`   
export const PopupContainer = styled.div<{$isVisible: boolean}>`
    width:100%;
    height:100%;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    display:${props => props.$isVisible ? 'flex' : 'none' };
    align-items: center;
    justify-content: center;
    z-index:2;
    background-color:rgba(0,0,0,0.7)

`
export const PopupContent = styled.div`
    max-width:960px;
    display:flex;
    color:var(--branco);
    padding:32px;
    background-color:var(--rosa);

    img{
       width:280px;
       height:280px;
       object-fit: cover;
    }

    & > div{
        margin-left:24px;

        .tituloContainer{
            display:flex;
            align-items: center;
            justify-content: space-between;

            img{
                width:15px;
                height:15px;
                margin-bottom:16px;
                cursor:pointer;
            }
        }

        h2{
            font-size:18px;
            font-weight:bold;
            margin-bottom:16px;
        }

        p{
            font-size:14px;
            margin-bottom:16px;
        }
        ${Button}{
            font-weight:bold;
            max-width:40%;
        }
    }

`