<script lang="ts">
    import { onMount } from 'svelte'

    let pokemonData: string[] = []
    const getPokemonData = async (): Promise<string[]> => {
        const rawPokemonData = await (
            await fetch('https://pokeapi.co/api/v2/pokemon?limit=99')
        ).json()
        return rawPokemonData.results.map(
            (p: { name: string; url: string }) => p.name
        )
    }

    onMount(async () => {
        pokemonData = await getPokemonData()
    })

    let pokemonName: string = ''

    let suggestions: string[]
    $: suggestions =
        pokemonName.length > 0
            ? pokemonData.filter((v) =>
                  new RegExp(`^${pokemonName}`, `i`).test(v)
              )
            : pokemonData
</script>

<main>
    <h1>Search</h1>
    <input type="text" bind:value="{pokemonName}" />
    <ul>
        {#each suggestions as suggestion}
            <li>{suggestion}</li>
        {/each}
    </ul>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
