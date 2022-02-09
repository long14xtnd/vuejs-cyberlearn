function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
// interpolation
// Vue.createApp({
//     data: function() {
//         return {
//             name: 'Đoàn Hải Long',
//             age: 22,
//             company: 'Citigo'
//         }
//     }
// }).mount('#interpolation')

// attribute
// Vue.createApp({
//     data: function() {
//         return {
//             imgUrl: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2019/11/rose-paris-fashion-week-2-683x1024.jpeg?fit=683%2C20000&quality=95&ssl=1',
//             linkInfo: 'https://bloganchoi.com/buc-anh-gay-sot-weibo-rose-blackpink-day-xinh-dep-ben-canh-em-trai-pham-bang-bang/'
//         }
//     }
// }).mount('#bind-attribute')

// methods
// Vue.createApp({
//         data: function() {
//             return {
//                 soNut: 0
//             }
//         },
//         methods: {
//             taoSoNut() {
//                 const mangXucXac = [getRandomInt(1, 6), getRandomInt(1, 6), getRandomInt(1, 6)];
//                 // console.log(mangXucXac)
//                 this.soNut = mangXucXac.reduce((tong, xucxac) => tong += xucxac, 0);
//                 // console.log(soNut);
//                 // return soNut;
//             },
//             renderTaiHayXiu() {
//                 this.taoSoNut();
//                 if (this.soNut > 11) {
//                     return "Tài"
//                 } else {
//                     return "Xỉu"
//                 }
//             }
//         }
//     }).mount('#method')
// Raw - html
// Vue.createApp({
//     data: function() {
//         return {
//             message: '<h1>Hôm nay tôi đi làm muộn hơn mọi ngày</h1>'
//         }
//     }
// }).mount('#raw-html')

// Event
// Vue.createApp({
//     data: function() {
//         return {
//             count: 0
//         }
//     },
//     methods: {
//         handleClick(event) {
//             console.log(event.target)
//             console.log('long đẹp trai')
//         },
//         handleClickIncrement(params, event) {
//             console.log(event.target)
//             this.count = this.count + params;
//         },
//         handleSubmit() {
//             alert('submit thành công')
//         },
//         handleLogin() {
//             console.log('login thành công')
//         }
//     }
// }).mount('#event')

//Two way binding 
// Vue.createApp({
//     data: function() {
//         return {
//             messages: ''
//         }
//     },

// }).mount('#two-way-binding');

//Computed and watch 
Vue.createApp({
    data: function() {
        return {
            firstName: 'Long',
            lastName: 'Doan Hai',
            count: 0,
            fullNameData: ''
        }
    },
    watch: {
        count(newValue, oldValue) {
            console.log('New Value: ' + newValue);
            console.log('Old Value: ' + oldValue);
        },
        lastName(newValue) {
            this.fullNameData = newValue + " " + this.firstName;
        },
        firstName(newValue) {
            this.fullNameData = this.lastName + " " + newValue
        }

    },
    computed: {
        fullName() {
            console.log('computed da chay')
            return this.lastName + " " + this.firstName
        }
    },
    methods: {
        // getFullName() {
        //     console.log('long dz')
        //     return this.lastName + " " + this.firstName

        // },//sai vi ko thay đổi gì mà vẫn chạy làm giảm hiệu năng
        handleClick() {
            this.count += 1;
            // this.firstName = "Trần Minh"
        }
    }

}).mount('#computed-and-watchers');

// Class and style binding
Vue.createApp({
    data: function() {
        return {

            styleOfP: {
                backgroundColor: "red",
                color: "yellow",
                padding: "20px",
                fontSize: "30px"
            },

            attrOfP: {
                textAlign: "left",

            },
            active: false,
        }
    },
    methods: {
        handleChangeColor() {
            return this.styleOfP.color = 'white'
        },
        handleHiddenIMG() {
            this.active = true;
        }
    }
}).mount('#class-and-style-binding');

Vue.createApp({
    data: function() {
        return {
            isLogin: false,
        }
    },
    methods: {
        login() {
            return this.isLogin = true
        }
    }
}).mount('#if-else')