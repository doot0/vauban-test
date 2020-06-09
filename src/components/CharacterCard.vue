<template>
  <div class="c-character-card">
    <div class="c-character-card__details">
      <h1 class="c-character-card__title">{{ character.name }}</h1>
      <p>Height: {{ character.height }}</p>
      <p>Mass: {{ character.mass }}</p>
      <p>Hair color: {{ character.hair_color }}</p>
      <p>Skin color: {{ character.skin_color }}</p>
      <p>Eye color: {{ character.eye_color }}</p>
      <p>Birth year: {{ character.birth_year }}</p>
      <p>Gender: {{ character.gender }}</p>
    </div>
    <div class="c-character-card__actions">
      <button class="c-character-card__action">Add to favourites</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'c-character-card',
  props: {
    character: {
      required: true
    }
  },
  methods: {
    addToFavourites() {

    }
  }
}
</script>

<style lang="scss" scoped>
.c-character-card {
  @apply border-solid border border-gray-300 shadow-md rounded-lg p-4 bg-white flex justify-between;
}
.c-character-card__details {}
.c-character-card__actions {}
.c-character-card__action {
  @apply bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow;
}
.c-character-card__title {
  @apply text-2xl font-semibold;
}
</style>
