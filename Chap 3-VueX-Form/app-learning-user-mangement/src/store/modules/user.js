import { getAllUserApi } from "../../apis/user";
const state = () => {
    return {
        userList: [{
                "id": 1,
                "name": "Đoàn Hải Long",
                "avatar": "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/269693668_1792401901149374_7750707019832737753_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OMZEUWJtIxYAX8g98ZZ&tn=tpyT5EWnPz4wjgVW&_nc_ht=scontent.fhan2-4.fna&oh=00_AT9Za2bqzVMU1xmEBURvhmmXVMN9EGv-uVR1XAP9mPeHbg&oe=621D5860",
                "age": 22,
                "description": "thân thiện , hoc hỏi nhanh",
                "programmingLanguage": ["JS", "PHP", "C++"],
                "gender": "Nam",
                "type": "ADMIN"
            },
            {
                "id": 2,
                "name": "Trần Quỳnh Giang",
                "avatar": "https://scontent.fpnh22-1.fna.fbcdn.net/v/t39.30808-6/269848198_651123699636474_2162510857838246832_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BREA6jlLduUAX8-w8kU&_nc_ht=scontent.fpnh22-1.fna&oh=00_AT8PdQ46ta5dCSBXt8Ajh1LKaLpdbp6eV7hCRYvVH7u3qg&oe=621CA192",
                "age": 24,
                "description": "thân thiện , hoc hỏi nhanh",
                "programmingLanguage": ["PHP", "C#"],
                "gender": "Nữ",
                "type": "CLIENT"
            }
        ],
        searchName: ""

    }

};
const getters = {
    userListByBoy(state) {
        return state.userList.filter((user) => user.gender === "Nam");

    },
    /**
     * 
     * tìm kiếm user theo Tên
     * đầu tiên từ biến state hệ thống ta lấy ra được searchName và userList
     * tiếp theo kiểm tra xem searchName có nằm trong userList hay không,sử dụng includes
     * toLowercase chỉ có tác dụng là biến chữ hoa thành chữ thường
     * 
     */
    userListBySearchName(state) {
        const { userList, searchName } = state;
        return userList.filter(
            (user) => user.name.toLowerCase().includes(searchName.toLowerCase())
        )

    }
};
const mutations = {
    setUserListMutation(state, payload) {
        state.userList = payload;
    },
    setSearchNameMutation(state, payload) {
        state.searchName = payload;
    },
    addUserMutation(state, payload) {
        // state.userList = [...state.userList, payload];
        state.userList.push(payload);
    },
    removeUserMutation(context, payload) {


        // Hàm findIndex sẽ trả về key của phần tử đầu tiên trong mảng thỏa mãn được điều kiện kiểm tra(được truyền vào như một hàm).
        const index = context.userList.findIndex(user => user.id === payload);
        if (index !== -1) {
            context.userList.splice(index, 1);
        } else {
            alert('Không tìm thấy id phù hợp')
        }

    },
    updateUserMutation(context, payload) {
        const index = context.userList.findIndex(user => user.id === payload.id);
        if (index !== -1) {
            context.userList[index] = payload;
        } else {
            alert('Không tìm thấy user phù hợp')
        }
    }

};
const actions = {
    async getAllUserAction(context) {
        const payload = await getAllUserApi();
        context.commit("setUserListMutation", payload)
    },
    setSearchNameAction(context, payload) {
        //context ở đây hiểu như $this.store.state vậy
        setTimeout(() => {
            context.commit("setSearchNameMutation", payload)
        }, 500)

    },
    addUserAction(context, payload) {
        // console.log(context);
        // console.log(payload);

        const newUser = {...payload, id: Math.random() }
        context.commit("addUserMutation", newUser);
    },
    removeUserAction(context, payload) {
        // console.log(context);
        // console.log(payload);
        context.commit("removeUserMutation", payload);
    },
    updateUserAction(state, payload) {
        state.commit("updateUserMutation", payload)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}