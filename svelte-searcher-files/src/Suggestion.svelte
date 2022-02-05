<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let suggestion: string
    export let chosenPokemon2: string = ''
    const dispatch = createEventDispatcher()

    const chosePokemon = (): void => {
        dispatch('chosePokemon', {
            pokemon: suggestion,
        })

        chosenPokemon2 = suggestion
    }
</script>

<div class="suggestion" on:click="{chosePokemon}">{suggestion}</div>

<style>
    .suggestion {
        font-size: 1.25rem;
    }
</style>
