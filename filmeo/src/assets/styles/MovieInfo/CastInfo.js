import styled from "styled-components";

export const CastContent = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    height: fit-content;
    width: 100vw;
`;
export const CastTitle = styled.div`
    display: flex;
    width: 100vw;
    h1{
        position: relative;
        left: 0;
        font-size: 1.5rem;
        padding-left: 5%;
        margin: 10% 0 1% 0;
    }
    @media screen and (max-width: 750px) {
        h1{
            font-size: 1rem;
            margin-bottom: 7%;
        }
    }
`;
export const CastContainer = styled.div`
    display: flex;
    width: 90%;
    padding: 1%;
    gap: 20px;
    margin-bottom: 10%;
    overflow-y: hidden;
    ::-webkit-scrollbar {
        width: 4px;
        height: 6px;
    }
    ::-webkit-scrollbar-track {
        background-color: #DDDDDD;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #5C16C5;
        border-radius: 8px;
    }
    @media screen and (max-width: 750px) {
        margin-bottom: 10%;
    }
`;
export const CastCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 13rem;
    height: 100%;
    cursor: default;
    border-radius: 9px;
    margin-bottom: 5%;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    cursor: default;
    img{
        height: 15rem;
        width: 13rem;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
    }
    h1{
        font-size: 1rem;
        font-weight: 700;
        padding-left: 5%;
    }
    h2{
        font-size: 0.9rem;
        font-weight: 300;
        padding-left: 5%;
    }
    @media screen and (max-width: 750px) {
        width: 10rem;
        margin-bottom: 5%;
        img{
            height: 13rem;
            width: 10rem;
        }
        h1{
            font-size: 0.8rem;
        }
        h2{
            font-size: 0.7rem;
        }
    }
`;

