import { createGlobalStyle } from 'styled-components'

import Background from '../assets/background/cover1.png'

export default createGlobalStyle`

:root {
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
        font-size: 1.6rem;
        overflow-x: hidden;
        width: 100vw;
        height: 100vh;
        background-color: black;
        background-image: url('${Background}');
        appearance: none;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
