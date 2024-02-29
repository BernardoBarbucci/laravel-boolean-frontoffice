import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CocktailsIndex from '../views/CocktailsIndex.vue'
import AboutView from '../views/AboutView.vue'
import ContactUsVue from '@/views/ContactUs.vue'


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
      component: AboutView
<<<<<<< HEAD
=======
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: ContactUsVue
>>>>>>> 0a29027de79b7ca6e8bf8e7c493570121ac15df1
    },
  ]
})

export default router
