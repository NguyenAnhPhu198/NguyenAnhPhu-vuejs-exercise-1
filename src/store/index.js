
import { createStore } from 'vuex'

// Vue.use(Vuex)

const storeData={
    state:{
        todos:  [
            { title: 'Mục 1', compled: false},
            { title: 'Mục 2', compled: false},
            { title: 'Mục 3', compled: false},
            { title: 'Mục 4', compled: false},
            { title: 'Mục 5', compled: false}
        ] 
    }    
}
// const store = new Vuex.Store({storeData})
const store =  createStore(storeData)
export default store