import NotPage from "@/modules/common/pages/NotPage.vue";
import HomePage from "@/modules/landing/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: HomePage
                },
                {
                    path: '/features',
                    name: 'features',
                    component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
                },
                {
                    path: '/pricing',
                    name: 'pricing',
                    component: () => import('@/modules/landing/pages/PricingPage.vue'),
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/modules/landing/pages/ContactPage.vue'),
                },
                {
                    path: '/pokemon/:id',
                    name: 'pokemon',
                    props: (route) => {
                        const id = +route.params.id
                        return {
                            id
                        }
                    },
                    component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
                },
            ],
        },
        {
            path: '/auth',
            name: 'auth',
            redirect: '/login',
            component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('@/modules/auth/pages/LoginPage.vue')
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('@/modules/auth/pages/RegisterPage.vue')
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotPage
        }

    ]
})

export default router
