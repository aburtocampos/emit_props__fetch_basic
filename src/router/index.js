import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../components/home/Home.vue'
import Main from '../components/main/Main.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/main', component: Main },
]

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
})

export default router