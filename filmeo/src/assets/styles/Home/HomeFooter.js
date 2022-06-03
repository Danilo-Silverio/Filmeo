import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    max-width: 100vw;
    padding: 2% 3%;
    box-shadow: 3px 3px 50px #0e1218;
    background-color: #0e1218;
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        height: fit-content;
        align-items: flex-start;
    }
`;
export const DevelopedBy = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    img{
        height: 5rem;
    }
    @media screen and (max-width: 900px){
        img{
            height: 3rem;
        }
    }
`;
export const Contact = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-end;
    width: 60%;
    gap: 3%;
    font-weight: 500;
    color: #988bc0;
    img{
        height: 3rem;
    }
    @media screen and (max-width: 700px){
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        img{
            height: 2rem;
        }
        p{
            font-size: 13px;
        }
    }
`;