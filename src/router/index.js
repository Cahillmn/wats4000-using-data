import Vue from 'vue'
import VueRouter from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
import Adjectives from '@/components/Adjectives'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Rhymesaurus',
    component: Rhymesaurus
  },
  
  { path: '/Adjectives',
    name: 'Adjectives',
    component: Adjectives


  }
]

const router = new VueRouter({
  routes
})

export default router
