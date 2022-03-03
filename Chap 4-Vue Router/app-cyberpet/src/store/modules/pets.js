const state = function() {
    return {
        petList: [

            {
                id: 1,
                name: "KiKi",
                type: "Chó",
                image: "http://vnnews24h.net/img_data/images/day-cho-con-lam-quen-khi-ve-nha-moi.jpg",
                description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },
            {
                id: 2,
                name: "MeoMeo",
                type: "Mèo",
                image: "https://znews-photo.zadn.vn/w660/Uploaded/mdf_vsxrlu/2021_01_22/meo_3_2.jpg",
                description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },
            {
                id: 3,
                name: "Tiqui",
                type: "Chim",
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mimus_polyglottus1_cropped.png",
                description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },
            {
                id: 4,
                name: "Pin",
                type: "Cá",
                image: "https://icdn.dantri.com.vn/thumb_w/640/2018/8/19/photo-0-1534682592203851761510.jpg",
                description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },

        ],
        petDetail: null
    }
}
const mutations = {
    getPetItemByIdMutation(state, payload) {
        const petDetail = state.petList.find(pet => pet.id == payload);
        state.petDetail = petDetail
    }
}
const actions = {
    getPetItemByIdAction(state, payload) {
        state.commit("getPetItemByIdMutation", payload)
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
};