import styled from "styled-components";

export const SimilarContent = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    height: fit-content;
    width: 100vw;
`;
export const SimilarContainer = styled.div`
    display: flex;
    width: 90%;
    padding: 1%;
    gap: 20px;
    margin-bottom: 5%;
    overflow-y: hidden;
    ::-webkit-scrollbar {
        width: 1px;
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
export const SimilarTitle = styled.div`
    display: flex;
    width: 100vw;
    h1{
        position: relative;
        left: 0;
        font-size: 1.5rem;
        padding-left: 5%;
        margin-bottom: 2%;
    }
    @media screen and (max-width: 750px) {
        h1{
            font-size: 1rem;
            margin-bottom: 7%;
        }
    }
`;
export const RecommendedMovieCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 15rem;
    height: 100%;
    cursor: default;
    border-radius: 9px;
    margin-bottom: 1%;
    img{
        height: 10rem;
        width: 15rem;
        border-radius: 9px;
        box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.25);
    }
    h1{
        font-size: 0.8rem;
        font-weight: 700;
        padding-top: 3%;
        padding-left: 5%;
    }
    h2{
        font-size: 0.8rem;
        font-weight: 300;
        padding-left: 5%;
    }
    @media screen and (max-width: 750px) {
        width: 100%;
        height: 50vh;
        margin-bottom: 5%;
        img{
            width: 13rem;
            height: 60%;

        }
    }
`;
