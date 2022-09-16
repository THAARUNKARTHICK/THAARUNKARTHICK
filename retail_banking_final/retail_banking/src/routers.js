import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import Login_page from'./components/Login_page.vue'
import Balance from'./components/Balance.vue'
import Statement from'./components/Statement.vue'
import Transfer from'./components/Transfer.vue'
import Booking from'./components/Booking.vue'
const routes = [
    {
        name: "Home",
        component: Home,
        path: "/",
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name: "Login_page",
        component: Login_page,
        path: "/login",
    },
    {
        name: "Balance_page",
        component: Balance,
        path: "/balance",
    },
    {
        name: "Statement_page",
        component: Statement,
        path: "/statement",
    },
    {
        name: "Transfer_page",
        component: Transfer,
        path: "/transfer",
    },
    {
        name: "Booking_page",
        component: Booking,
        path: "/booking",
    },
];

const router = createRouter({
    history:createWebHashHistory(),
    routes,
});

export default router;