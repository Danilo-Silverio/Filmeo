import styled from "styled-components";

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
height: 8vh;
max-width: 100vw;
padding: 2% 5%;
background-color: #5b3cb856;
img{
    height: 5rem;
}
@media screen and (max-width: 770px){
    padding: 1% 3%;
    img{
        height: 3rem;
    }
}
`;
export const NavigationBar = styled.div`
width: 60%;
ul{
    display: flex;
    list-style: none;
    gap: 5%;
}
li{
    display: flex;
    align-items: center;
    height: 4vh;
    padding: 3%;
    font-size: 1.3rem;
    font-weight: 500;
    border: 2px solid transparent;
    color: #988bc0;
    cursor: pointer;
    transition: all 0.3s ease;
}
li:hover{
    font-weight: 700;
    color: #fff;
}
li:active{
    border-bottom: 2px solid #fff;
}
@media screen and (max-width: 770px){
    display: none;
}
`;
export const HeaderButtons = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
gap: 9px;
font-weight: 700;
color: #fff; 
`;
export const LoginButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 3rem;
width: 8rem;
border-radius: 5px;
background-color: #4d3592;
cursor: pointer;
@media screen and (max-width: 770px){
    height: 2rem;
    width: 5rem;
}
`;
export const SignUpButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 3rem;
width: 8rem;
border-radius: 5px;
background-color: #38d44a;
cursor: pointer;
@media screen and (max-width: 770px){
    height: 2rem;
    width: 5rem;
}
`;