import { createRouter, createWebHistory } from 'vue-router'
import SelectServer from '../views/SelectServer.vue'
import SelectTrain from '../views/Selectrtrain.vue';
const routes = [
    {
        path: '/',
        name: 'SelectServer',
        component: SelectServer
    },
    {
        path:'/train/:server',
        name:'SelectTrain',
        component:SelectTrain,
        props : true
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router
