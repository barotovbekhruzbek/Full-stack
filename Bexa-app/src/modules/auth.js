import AuthService from "../service/auth";
const state = {
    isLoading:false,
    user: null,
    error:null,
}
const mutations = {
   registerStart (state) {
    state.isLoading = true
       state.user = null
       state.error = null
   },
   registerSuccess (state, payload) {
       state.isLoading = false
       state.user = payload
   },
    registerFailure (state,payload) {
        state.isLoading = false
        state.errors = payload
    }
}
const actions = {
    register(context,user) {
        return new  Promise( (resolve,reject) => {
            context.commit('registerStart')
            AuthService.register(user)
                .then(response => {

                    context.commit('registerSuccess',response.data.user)
                    resolve(response.data.user)
                })
                .catch( error => {

                    context.commit('registerFailure',error.response.data)
                    reject(error.response.data)
                } )
        })
    }
}
export default  {
    state,
    mutations,
    actions
}