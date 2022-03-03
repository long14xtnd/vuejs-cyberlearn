const state = function() {
    return {
        petList: [

            {
                name: "KiKi",
                type: "Chó",
                image: "http://vnnews24h.net/img_data/images/day-cho-con-lam-quen-khi-ve-nha-moi.jpg",
                description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },
            {
                name: "MeoMeo",
                type: "Mèo",
                image: "https://znews-photo.zadn.vn/w660/Uploaded/mdf_vsxrlu/2021_01_22/meo_3_2.jpg",
                description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },
            {
                name: "Tiqui",
                type: "Chim",
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mimus_polyglottus1_cropped.png",
                description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },
            {
                name: "Pin",
                type: "Cá",
                image: "https://icdn.dantri.com.vn/thumb_w/640/2018/8/19/photo-0-1534682592203851761510.jpg",
                description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },

        ]
    }
}

export default {
    namespaced: true,
    state,
};