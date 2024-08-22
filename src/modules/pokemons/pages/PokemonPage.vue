<template>
  <section>
    <h1 class="text-3xl font-bold">Pokemon <small class="text-blue-500">{{ id }}</small></h1>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="Pokemon"
      class="w-[200px] h-[200] mt-5"
    />
  </section>
</template>

<script setup lang="ts">
    interface Props {
        id: string
    }

    defineProps<Props>()

</script>
