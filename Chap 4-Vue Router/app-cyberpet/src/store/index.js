import { createStore } from 'vuex'
import users from './modules/users.js'
import pets from './modules/pets.js'
const store = createStore({
    modules: {
        users,
        pets
    }
})
export default store