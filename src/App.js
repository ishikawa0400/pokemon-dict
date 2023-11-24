import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAllPokemon, getPokemon } from './utils/pokemon'
import { Card } from './components/Card'

function App() {
    const initURL = 'https://pokeapi.co/api/v2/pokemon-species'
    const [loading, setLoading] = useState(false)
    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        fetchPokemonData()
    }, [])

    const fetchPokemonData = async () => {
        setLoading(true)
        // 全てのポケモンデータを取得
        let res = await getAllPokemon(initURL)

        loadPokemon(res.results)
        setLoading(false)
    }

    const loadPokemon = async (data) => {
        // 一体ずつデータを取得
        let _pokemonData = await Promise.all(
            data.map((pokemon) => {
                let pokemonRecord = getPokemon(pokemon.url)
                return pokemonRecord
            })
        )
        setPokemonData(_pokemonData)
    }

    console.log(pokemonData)

    return (
        <AppContainer>
            {loading ? (
                <h1>ロード中...</h1>
            ) : (
                <PokemonCardContainer>
                    {pokemonData.map((pokemon, i) => {
                        return <Card key={i} pokemon={pokemon} />
                    })}
                </PokemonCardContainer>
            )}
        </AppContainer>
    )
}

export default App

const AppContainer = styled.div`
    text-align: center;
    width: 100%;
    height: 100vh;
`

const PokemonCardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    place-items: center;
    margin-top: 20px;
`
