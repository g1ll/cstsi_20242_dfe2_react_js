import styled from "styled-components";

export const LoginStyled = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 360px;
    position: relative;
    z-index: 1;
    background: white; //var(--main-bg-color);//white
    max-width: 360px;
    padding: 34px;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 28px;
    margin-bottom: 1rem;
    text-align: center;
    color: #1e40af;
  }
  
  p {
    margin: 15px 0 0;
    color: #b3b3b3; //var(--default-grey-color);
    font-size: 16px;
    text-align: center;
  }

  p a {
    color: #1e40af;//var(--second-color);
    text-decoration: none;
  }
`;
