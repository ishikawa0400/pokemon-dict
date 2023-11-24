import React from 'react'
import styled from 'styled-components'

export const Card = (props) => {
    const name = props.pokemon.names.find(
        (ele) => ele.language.name == 'ja'
    ).name

    const id = props.pokemon.id

    // ポケモンの名前を日本語で取得する場合、画像URLが一緒に受け取れないので地の文で書く
    const imgSrc =
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
        id +
        '.png'

    return (
        <CardContainer>
            <CardImg>
                <img src={imgSrc} />
            </CardImg>
            <CardName>{name}</CardName>
        </CardContainer>
    )
}

export default Card

const CardContainer = styled.div`
    box-shadow: 2px 8px 21px -2px #777777;
    border-radius: 10px;
    width: 290px;
`

const CardImg = styled.div``

const CardName = styled.div`
    padding: 0;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 0;
`
