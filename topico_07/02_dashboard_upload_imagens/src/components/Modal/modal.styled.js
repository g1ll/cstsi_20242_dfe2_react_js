import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top:0px;
  left:0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: grid;
  place-items: center;
`;

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid var(--second-color);
  border-radius: 12px;
  position:  absolute;
  min-width: 250px;
  width: 80%;
  top: 5vh;
  height: auto;
  max-height: 700px;
  padding: 5vh;
  padding-top: .5vh;
  /* left: calc(50% - 125px); */
  /* bottom: 70px; */
  > div{
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1{
    margin-bottom: .3rem;
  }

  @media (min-width: 480px) {
    width: 70vw;
  }

  @media (min-width: 768px) {
    width: 65vw;
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--dark-bg-color);
    border-color: var(--primary-color);
  }
`