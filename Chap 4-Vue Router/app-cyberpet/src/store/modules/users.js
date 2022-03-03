const state = function() {
    return {
        userList: [{
                id: 1,
                name: "Đoàn Hải Long",
                age: 22,
                email: "longdoan14xtnd@gmail.com",
                avatar: "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/269693668_1792401901149374_7750707019832737753_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uPcngM7vCZEAX9Bsoh0&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-3uSOSgCiwCbO0RtKUPenSoLrwq-41QlaTh8o-JlYjpw&oe=62254160",
                typePets: ["Chó", "Mèo"],
            },
            {
                id: 2,
                name: "Nguyễn Nhật Minh",
                age: 22,
                email: "nhatminhnguyen@gmail.com",
                avatar: "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/185428778_1410385815984654_3818532631775337648_n.jpg?stp=dst-jpg_s320x320&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=uMDlEnV0tEAAX-dxvEx&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8oak8TA-b54epqkXG7eS0kSTYaSb9HTohKDU8Ff2Lmkg&oe=622530AF",
                typePets: ["Cá", "Chim"],
            },
        ],
        userDetail: null,
    };
};
const mutations = {
    setUserDetailMutation(state, payload) {
        const userDetail = state.userList.find((user) => user.id == payload);
        state.userDetail = userDetail;
    }
}
const actions = {
    getUserByIdAction(context, payload) {
        context.commit("setUserDetailMutation", payload)
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
};