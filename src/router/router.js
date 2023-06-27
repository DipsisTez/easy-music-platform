import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import TopSongPage from '@/pages/TopSongPage'
import AboutPage from '@/pages/AboutPage'
import AuthPage from '@/pages/AuthPage'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/best',
        component: TopSongPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/auth',
        component: AuthPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;