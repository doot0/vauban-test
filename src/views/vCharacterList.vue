<template>
  <div class="v-character-list container mx-auto">
    <h1 class="v-character-list__title">Star Wars Character List</h1>
    <div v-if="loadingReady">Loading characters.</div>
    <div v-if="loadingError">Error loading characters.</div>
    <div v-if="loadingSuccess">
      <div class="v-character-list__favourites">

      </div>
      <div class="v-character-list__search">
        <input v-model.trim="searchQuery" placeholder="Filter through characters by..." class="v-character-list__search-input" type="search"/>
        <select name="" id="" class="v-character-list__search-type" v-model="filterType">
          <option selected value="name">Name</option>
          <option value="height">Height</option>
          <option value="mass">Mass</option>
          <option value="hair_color">Hair color</option>
          <option value="skin_color">Skin color</option>
          <option value="eye_color">Eye color</option>
        </select>
      </div>
      <ul class="v-character-list__list">
        <li class="v-character-list__item" :key="char.created" v-for="char in filteredChars">
          <CharacterCard :character="char"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import loadingState from '../mixins/loadingState.mixin'
import CharacterCard from "../components/CharacterCard"
export default {
  name: 'v-character-list',
  mixins: [loadingState],
  components: {
    CharacterCard
  },
  data() {
    return {
      searchQuery: '',
      filterType: 'name'
    }
  },
  created() {
    this.getCharacters().then(() => {
      this.loadingState = 1
    }).catch(() => {
      this.loadingState = 2
    })
  },
  methods: {
    ...mapActions(['getCharacters'])
  },
  computed: {
    filteredChars() {
      return this.chars.filter(char => {
        const filterType = this.filterType ? this.filterType : 'name'
        const lowercaseName = char[filterType].toLowerCase()
        const lowercaseQuery = this.searchQuery.toLowerCase()
        return lowercaseName.includes(lowercaseQuery)
      })
    },
    ...mapState(['chars'])
  }
}
</script>

<style lang="scss" scoped>
.v-character-list {}
.v-character-list__title {
  @apply text-center font-bold text-white text-3xl my-4;
}
.v-character-list__search {
  @apply my-4 flex justify-between items-center sticky top-0 bg-white p-3 shadow-lg rounded-lg;
}
.v-character-list__search-input {
  @apply py-3 px-4 rounded-lg w-full bg-gray-300 mr-2 shadow-inner;
}
.v-character-list__search-type {
  @apply py-3 px-4 rounded-lg bg-gray-300;
}
.v-character-list__item {
  + .v-character-list__item {
    @apply mt-4;
  }
}
</style>
