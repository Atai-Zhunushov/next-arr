"use client"
import React, {useEffect, useState} from 'react';
import Image from "next/image";





const Pokemons = () => {
    const [pokemonData, setPokemonData] = useState([]);
     interface Pokemon {
        name: string;
        url: string;
        // Дополнительные поля, если они есть в данных о покемонах
    }



    useEffect(() => {
        const fetchPokemonData = async () => {
            const url = 'https://pokeapi.co/api/v2/';
            const response = await fetch(url + 'pokemon?offset=20&limit=20');
            const pokemons = await response.json();
            const promises = pokemons.results.map(async (pokemon: Pokemon) => {
                const response = await fetch(pokemon.url);
                const data = await response.json();
                return {
                    name: data.name,
                    img: data.sprites.front_default,
                };
            });

            const pokemonDetails = await Promise.all(promises);
            setPokemonData(pokemonDetails);
        };

        fetchPokemonData();
    }, [])

    return (
        <>
            <div className="w-1000 flex align-center gap-10 flex-wrap mx-auto text-center my-5 ">
                {pokemonData.map((pokemon, index) => (
                    <div key={index} >
                        <h2>{pokemon.name}</h2>
                        <Image src={pokemon.img} alt={pokemon.name} width={100} height={100}/>
                        {/* Другая информация о покемоне */}
                    </div>
                ))}
            </div>

        </>
    );
};

export default Pokemons;

