export default {
  data() {
    return {
      loadingState: 0
    }
  },
  computed: {
    loadingReady() {
      return this.loadingState === 0
    },
    loadingSuccess() {
      return this.loadingState === 1
    },
    loadingError() {
      return this.loadingState === 2
    }}
}
