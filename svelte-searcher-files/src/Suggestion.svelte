<script lang="ts">
    export let suggestion: string
    export let chosenPokemon: string = ''

    // import { createEventDispatcher } from 'svelte'
    // const dispatch = createEventDispatcher()
    // const chosePokemon = (): void => {
    //     dispatch('chosePokemon', {
    //         pokemon: suggestion,
    //     })
    // }
</script>

<div class="suggestion" on:click="{() => (chosenPokemon = suggestion)}">
    {suggestion}
</div>

<style>
    .suggestion {
        font-size: 1.25rem;
    }
</style>
