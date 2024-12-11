import styled from "styled-components";

export const Button = styled.button`
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: var(--primary-color);
    border: 0;
    text-decoration: none;
    padding: 15px;
    color:var(--second-color);
    font-size: 16px;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    font-size: 14px;
    border-radius: 4px;
    margin: 0 0.5rem;
`;

export const ButtonEdit = styled(Button)`
    display: inline;
    &:hover{
        background-color: var(--second-color);
        color: var(--add-confirm-color);
    }
`;

export const ButtonDelete = styled(ButtonEdit)`
    background-color: var(--remove-cancel-color);
    color: var(--ligth-gray);
    &:hover{
        background-color: var(--remove-cancel-color-hover);
        color: white;
    }
`;