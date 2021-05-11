export default {
  namespaced: true,
  state: () => ({
    list: [1, 2, 3, 4],
    item: {
      word: '',
      abbreviation: '',
      english: '',
      description: '',
      typeWord: false,
      domainId: 0
    }
  }),
  getters: {
    getItem(state, id) {
      return state.list.filter(i => i.id === id)[0]
    },
    getAllItems(state) {
      return state.list
    }
  }
}
