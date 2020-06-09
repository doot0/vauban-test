import Vue from 'vue'
import Router from 'vue-router'

import vCharacterList from "../views/vCharacterList"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'vCharacterList',
      component: vCharacterList
    }
  ]
})
