<script lang="ts">
    export let suggestion: string
    export let chosenPokemon: string = ''
</script>

<div class="suggestion" on:click="{() => (chosenPokemon = suggestion)}">
    {suggestion}
</div>

<style>
    .suggestion {
        font-size: 1.25rem;
    }
</style>
