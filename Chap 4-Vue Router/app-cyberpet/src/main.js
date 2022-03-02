import { createApp } from "vue";
import App from "./App.vue";
import UserList from "./pages/UserList.vue";
import PetList from "./pages/PetList.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [{
        path: "/users", //http://localhost:8080/users
        component: UserList,
    },
    {
        path: "/pets", //http://localhost:8080/pets
        component: PetList,
    },
];
//lấy ra bộ tịnh tiến trong website
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(), //lưu lại lịch sử khi ta truy cập từng trang web 
    routes, // viết tắt của `routes: routes`
    linkActiveClass: "active"
});
const app = createApp(App);
app.use(router)
app.mount("#app");