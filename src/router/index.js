import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: () =>
                import ('../views/TasksView.vue'),
        },
        {
            path: '/shop',
            name: 'shop',
            component: () =>
                import ('../views/shopView.vue'),
        },
        {
            path: '/clan',
            name: 'shield',
            component: () =>
                import ('../views/ClanView.vue')
        },
        {
            path: '/friends',
            name: 'friends',
            component: () =>
                import ('../views/FriendsView.vue'),
        },
    ],
})

export default router