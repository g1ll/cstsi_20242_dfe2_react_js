import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

:root{
    /* --primary-color:#5A08A6; */
    /* --second-color:#08A63F; */
    --primary-color:#4ade80;
    --second-color:#1e40af;

    --dark-green:#40b96c;
    --ligth-blue:#60a5fa;

    --ligth-gray:#f6f6f6;
    --ligth-gray-100:#e6e6e6;

    --dark-grey:#939393;
    --dark-bg-color:#1a1a1a;
    --dark-main-bg-color: #080808;
    --dark-second-bg-color: #22614e;
    --add-confirm-color:#00a762;
    --remove-cancel-color:#b72424;
    --remove-cancel-color-hover:#ff4d4d;

    --table-bg-color:#efefef;
    --main-bg-color:white;


    --default-grey-color: #b3b3b3

    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    width: 100%;
}

  h4,p{
    margin: 0;
  }


    html, body, #root {
    min-height: 100vh;
    }

    #root{
      width:100vw;
    }

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}

h2 {
    color: blue;
  }

body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #212121;
    background-color: var(--ligth-gray);
    display: flex;
    justify-content: center;
    margin: 0;
    /* place-items: center; */
    min-width: 320px;
    /* width: 100vh; */
    min-height: 100vh;
}

body div {
    align-items: center;
    text-align: center;
  }
  

input {
    outline: 0;
    background: var(--main-bg-color);
    width: 100%;
    border: 2px solid var(--ligth-gray-100);
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    transition: all 0.3s;
}

input:focus {
    border-color: var(--second-color);
}

input::placeholder{
    color:var(--ligth-blue)
}

input:hover{
    border-color: var(--second-color);
}

.btn,
.btn-add,
.btn-edit,
.btn-delete,
 {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: var(--primary-color);
    border: 0;
    text-decoration: none;
    padding: 15px;
    color:var(--second-color);
    font-size: 16px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
}

.btn-disabled{
    border: 0;
    text-decoration: none;
    padding: 15px;
    /* background: var(--default-grey-color); */
    background: var(--dark-grey);
    color: var(--ligth-gray);
    display: block;
}

.btn-block {
    width: 100%;
}

.btn-add,
.btn-edit,
.btn-delete, .btn-cancel{
    padding: 0.5rem 0.75rem;
    font-size: 14px;
    border-radius: 4px;
}
.btn-add {
    background-color: var(--add-confirm-color);
}
.btn-delete {
    background-color: var(--remove-cancel-color);
    color:white;
}

.btn-delete:hover {
    background-color: var(--remove-cancel-color-hover);
    color: var(--dark-bg-color);
}

.btn-cancel {
    background-color: var(--dark-grey);
    color:white;
    margin-right: 2px;
    border: 0px;
}

.btn-logout {
    /* text-decoration: none; */
    padding: 0.75rem 1.5rem;
    color: #212121;
    /* transition: all 0.3s; */
    border-radius: 6px;
}
.btn-logout:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.btn:hover,
.btn:active,
.btn:focus {
    background: var(--second-color);
    color: var(--primary-color)
}

.text-center {
    text-align: center;
}

table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
}

table > thead > tr > th {
    text-align: left;
    padding: 0.5rem 0.5rem;
    background-color: var(--table-bg-color);
}

table > tbody > tr > td {
    padding: 0.5rem 0.5rem;
    border-bottom: 1px solid var(--table-bg-color);
    white-space: nowrap;
}

.message-error{
    color:var(--remove-cancel-color);
    font-size: 14px;
}

@media (prefers-color-scheme: dark) {
  :root, body {
    color:  rgba(255, 255, 255, 0.87);
    background-color:  #1a1a1a;
  }


  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }

  table{
    background-color: #1a1a1a;
    color: #f9f9f9;
  };

  table>thead>tr>th{
    background-color: var(--dark-main-bg-color);
    color: var(--primary-color);
  }
}
`;
