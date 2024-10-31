import styled from "styled-components";


export const CartContainer = styled.div`
    position:fixed;
    height:100%;
    width:100%;
    display:flex;
    justify-content: flex-end;
    z-index:3;
`
export const Overlay = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.7);
`
export const Cart = styled.aside`
    padding:32px 8px;
    background-color:var(--rosa);
    z-index:3;
    width:100%;
    max-width:360px;
    overflow-y:scroll;

`
export const CartItem = styled.div`
    display:flex;
    margin-bottom:16px;
    z-index:2;
    background-color:var(--rosaClaro);
    padding:8px 12px;
    margin-bottom:16px;
    position:relative;

    img{
        width:80px;
        height:80px;
        object-fit: cover;
        margin-right:8px;
    }
    h3{
        color:var(--rosa);
        font-size:18px;
        font-weight:bold;
        margin-bottom:16px;
    }
    p{
        font-weight:normal;
        color:var(--rosa)
    }
    .excluir{
        width:16px;
        height:16px;
        position:absolute;
        bottom:8px;
        right:8px;

        &:hover{
            cursor:pointer;
        }
    }
`
export const PrecoTotal = styled.div`
    margin-top:24px;
    margin-bottom:16px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    color:white;

    
    span{
        display:inline-block;
    }
`
export const Button = styled.button`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    color:var(--rosa);
    background-color:var(--branco);
    font-size:14px;
    padding:4px;
    font-weight:bold;
    border:none;
`