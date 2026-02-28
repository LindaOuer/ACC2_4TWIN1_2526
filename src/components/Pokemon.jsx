import axios from "axios";
import { useEffect, useState } from "react";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    const [pokId, setPokId] = useState(1);

    // useEffect(() => {
    // fetch(`https://pokeapi.co/api/v2/pokemon/${pokId}`)
    // .then((response) => response.json())
    // .then((data) => setPokemon(data))
    // .catch((error) => console.error("Error fetching Pokémon:", error));
    // }, [pokId]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchPokemon = async () => {
            try {
                const res = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${pokId}`,
                    {
                        cancelToken: source.token,
                    },
                );
                setPokemon(res.data);
            } catch (error) {
                if (!axios.isCancel(error)) {
                    console.error(error);
                }
            }
        };

        fetchPokemon();

        // Fonction de nettoyage (cleanup)
        return () => source.cancel("Requête annulée car l'ID a changé");
    }, [pokId]);

    return (
        <>
            <input
                type="number"
                onChange={(e) => setPokId(e.target.value)}
                value={pokId}
                className="mt-5"
            />
            {pokemon ? (
                <div>
                    <h3>Name: {pokemon.name} </h3>
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                </div>
            ) : (
                <h1>Loading</h1>
            )}
        </>
    );
};
export default Pokemon;
