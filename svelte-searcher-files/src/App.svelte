<script lang="ts">
    import { onMount } from 'svelte'
    import Suggestion from './Suggestion.svelte'

    let pokemonData: string[] = []
    onMount(() => {
        const setPokemonData = async (): Promise<void> => {
            const rawPokemonData = await (
                await fetch('https://pokeapi.co/api/v2/pokemon?limit=99')
            ).json()

            pokemonData = rawPokemonData.results.map(
                (p: { name: string; url: string }) => p.name
            )
        }
        setPokemonData()
    })

    let pokemonName: string = ''

    let suggestions: string[]
    $: suggestions =
        pokemonName.length > 0
            ? pokemonData.filter((v) =>
                  new RegExp(`^${pokemonName}`, `i`).test(v)
              )
            : pokemonData

    let chosenPokemon: string = ''
    let chosenPokemon2: string = ''
</script>

<main>
    <h1>Chose Your Pokemon</h1>
    <h2>Chosen Pokemon 1: {chosenPokemon}</h2>
    <h2>Chosen Pokemon 2: {chosenPokemon2}</h2>
    <div class="search">
        <span>Search: </span>
        <input type="text" bind:value="{pokemonName}" />
        {#each suggestions as suggestion}
            <Suggestion
                suggestion="{suggestion}"
                on:chosePokemon="{(e) => {
                    chosenPokemon = e.detail.pokemon
                }}"
                bind:chosenPokemon2
            />
        {/each}
    </div>
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

    h2 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 2em;
        font-weight: 100;
    }
    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
