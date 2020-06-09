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
      <div class="c-character-card__action" :class="{'selected': favourited}" @click="handleFavourite">
        <span v-if="!favourited">Add to favourites</span>
        <span v-else>Remove from favourites</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'c-character-card',
  data() {
    return {
      favourited: false
    }
  },
  props: {
    character: {
      required: true
    }
  },
  methods: {
    ...mapMutations({
      addFavourite: 'ADD_FAVOURITE',
      removeFavourite: 'REMOVE_FAVOURITE'
    }),
    handleFavourite() {
      const curChar = this.character
      if (!this.favourited) {
        this.favourited = true
        this.addFavourite(curChar)
      } else {
        this.favourited = false
        this.removeFavourite(curChar)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@tailwind breakpoints;
.c-character-card {
  @apply border-solid border border-gray-300 shadow-md rounded-lg p-5 bg-white;

  @screen sm {
    @apply flex justify-between;
  }
}
.c-character-card__details {}
.c-character-card__actions {}
.c-character-card__action {
  @apply bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full mt-2 cursor-pointer;

  @screen sm {
    @apply mt-0;
  }

  &:hover {
    @apply bg-gray-200;
  }

  &.selected {
    @apply bg-blue-500 text-white border-blue-800;

    &:hover {
      @apply bg-red-500 border-red-800;
    }
  }
}
.c-character-card__title {
  @apply text-2xl font-semibold;
}
</style>
