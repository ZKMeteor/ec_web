import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {

}

const mutations = {
    Create(state,member){
        state.Member.push(member)
        console.log('mutations',member)
    }
}

const state = {
    Member:[],
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})