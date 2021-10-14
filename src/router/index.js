import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: '/module/:id',
                component: () => import('@/views/ModuleShow.vue')
            }
        ]
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router