import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CocktailsIndex from '../views/CocktailsIndex.vue'
import AboutView from '../views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cocktails',
      name: 'cocktailsIndex',
      component: CocktailsIndex
    },
    {
      path: '/about-us',
      name: 'aboutUs',
      component: HomeView
    },
  ]
})

export default router
