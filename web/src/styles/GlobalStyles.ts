
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --background:#f0f2f5;
    --red:#e5234d;
    --blue:#5429cc;
    --blue-light:#6933FF;
    --text-title:#363f5f;
    --text-body:#969cb3;
    --shape:#ffff;
    --green:#33CC95;
}

//reset
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: var(--background);
    -webkit-font-smoothing:antialiased;
}

body,input,textarea,button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
}

html {
    @media (max-width:1080px) {
        //15px
        font-size: 93.75%;
    }

    @media (max-width:720px) {
        //14px
        font-size: 87.5%;
    }
}

button{
    cursor: pointer;
    border: 0;
}

[disabled]{
    opacity: .6;
    cursor: not-allowed;
}

.modal-overlay{
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;

    border-radius: 0.24rem;
}

.react-modal-close{
    border: 0;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;
    transition: filter .2s;
}

`