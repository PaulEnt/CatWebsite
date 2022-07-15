import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const CatContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: space-evenly;
    width: 100%;
`
export const CatCard = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid;
    width: 20%;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
`
export const H1 = styled.h1`
    text-align: center;
    margin-top: 50px;
    font-family: "Times New Roman", Times, serif;
`
export const Img = styled.img`
    border-bottom: solid;
    border-color: black;
    width: 100%;
    height: 300px;
`
export const H2 = styled.h2`
    word-wrap: break-word;
    max-width: 100%;
    font-family: "Times New Roman", Times, serif;
`
export const P = styled.p`
    word-wrap: break-word;
    max-width: 100%;
    font-family: "Times New Roman", Times, serif;
    font-weight: bolder;
`