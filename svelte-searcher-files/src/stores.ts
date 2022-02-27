import { readable, Readable, Subscriber } from 'svelte/store'

const setPokemonData = async (set: Subscriber<string[]>): Promise<void> => {
    const rawPokemonData = await (
        await fetch('https://pokeapi.co/api/v2/pokemon?limit=99')
    ).json()

    set(
        rawPokemonData.results.map((p: { name: string; url: string }) => p.name)
    )
}
export const pokemonData: Readable<string[]> = readable([], (set) => {
    setPokemonData(set)

    return () => set([])
})
