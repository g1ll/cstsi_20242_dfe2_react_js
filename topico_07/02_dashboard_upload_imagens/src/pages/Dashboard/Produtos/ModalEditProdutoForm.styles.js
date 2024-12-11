import styled from 'styled-components'

export const FormContainer = styled.form`
    display: block;
`;

export const InputFileImage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    img{
        display: block;
        width: 12rem;  
        height: 10rem;
        object-fit: scale-down;
        margin-right: 10px;
    }

    input[type="file"]{
        margin-top: 15px;
        display: inline;
        width: 50%;
    }
`;

export const InputsNumbers = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    input[type="number"]{
        width: 45%;
        margin-left: 10px;
    }
   label{
        margin-left: 10px;
    }
`;


export const InputCheckbox = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    margin: 10px 10px;
    span{
       font-weight:bold;
    }
    input{
        width: 30px;
        margin:0;
        margin-right: 5px;
    }
`