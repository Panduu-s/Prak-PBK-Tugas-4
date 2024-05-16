import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ClockCalendar from '../components/ClockCalendar.vue'
import Calculator from '../components/Calculator.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/clockcalendar', component: ClockCalendar },
  { path: '/calculator', component: Calculator }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
