import Vue from 'vue'
import Vuex from 'vuex'
import dataDict from './modules/data-dict'


Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        dataDict
    }
})
