import { createGlobalStyle } from "styled-components";
import img from '../paw.webp'
// import font from 'https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation:wght@500&display=swap%27';

export const GlobalStyles = createGlobalStyle`    
    body {
        background-image: url(${img});
        background-repeat: repeat;
        font-family: "Times New Roman", Times, serif;
    }
`