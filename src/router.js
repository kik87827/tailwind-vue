import { createWebHistory, createRouter } from "vue-router";
import BasicDom from "./components/BasicDom.vue";
import FlexDom from "./components/FlexDom.vue";
import GridDom from "./components/GridDom.vue";

const routes = [
    {
        path : "/basic",
        component : BasicDom
    },
    {
        path : "/flex",
        component : FlexDom
    },
    {
        path : "/grid",
        component : GridDom
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;