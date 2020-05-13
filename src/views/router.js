import Vue from 'vue'
import Router from 'vue-router'
import FormsPractice from '@/components/FormsPractice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'forms',
      component: FormsPractice
    }
  ]
})