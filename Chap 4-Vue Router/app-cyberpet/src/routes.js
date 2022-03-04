import UserList from "./pages/UserList.vue";
import PetList from "./pages/PetList.vue";
import UserDetail from "./components/UserDetail.vue";
import PetDetail from "./components/PetDetail.vue"
// import NotFound from "./components/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [

    // {
    //     path: "/",
    //     redirect: "/users",
    // },
    {
        path: "/users", //http://localhost:8080/users
        component: UserList,
        alias: "/", //http://localhost:8080/users ,tức là đi vào đường dẫn / thì nó cũng hiện lên UserList
        name: "user-list"
    },
    {
        path: "/pets", //http://localhost:8080/pets
        component: PetList,
        name: 'pet-list'
    },
    {
        path: "/user-detail/:userID", //http://localhost:8080/pets,userID là params ta truyền lên url
        component: UserDetail,
        name: "user-detail"
    },
    {
        path: "/pet-detail/:petID", //http://localhost:8080/pets,userID là params ta truyền lên url
        component: PetDetail,
        name: "pet-detail"
    },
    { path: '/:pathMatch(.*)*', redirect: "/" }, //chỗ này có nghĩa là người dùng nhấn vào đường link ko phù hợp nó sẽ trả về trang chủ
];
//lấy ra bộ tịnh tiến trong website
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(), //lưu lại lịch sử khi ta truy cập từng trang web,ví dụ trước khi vào trang pet ta ở trang user thì từ trang pet nhấn back nó sẽ quay lại trang user
    routes, // viết tắt của `routes: routes`
    linkActiveClass: "active", //class để biết rằng đang active tại trang nào
});

export default router