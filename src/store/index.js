import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      course: ['video / filmmaker', 'test']
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    courseRequest: state => request => {
      const valid = (element) => {
        if (element.indexOf(request.toLowerCase()) == -1) return;
        return true;
      };
      return state.course.find(valid)
    }
  }
})
