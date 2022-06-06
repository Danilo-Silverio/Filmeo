import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  min-width: 100vw;
  padding: 0 5%;
  background-color: #42288c;
  img {
    height: 4rem;
    cursor: pointer;
  }
  @media screen and (max-width: 770px) {
    padding: 1% 3%;
    img {
      height: 3rem;
    }
  }
`;
