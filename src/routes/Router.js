import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '@/views/Dashboard.vue'
import Laporan from '@/views/Laporan.vue'
import MenuRouter from "./MenuRouter";
import PemesananRouter from "./PemesananRouter.js";

const BaseRouter = [
    {path: '/', name: 'dashboard', component: Dashboard},
    {path: '/laporan', name: 'laporan', component: Laporan},
]

const routes = [
    ...MenuRouter,
    ...PemesananRouter,
    ...BaseRouter
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;