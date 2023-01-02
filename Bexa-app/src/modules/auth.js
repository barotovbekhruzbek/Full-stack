import AuthService from "../service/auth";
const state = {
    isLoading:false,
    user: null,
    error:null,
}
const mutations = {
   registerStart (state) {
    state.isLoading = true
   },
   registerSuccess (state, payload) {
       state.isLoading = false
       // state.user =
   },
    registerFailure (state) {
        state.isLoading = false
    }
}
const actions = {
    register(context,user) {
        return new  Promise( ()=> {
            context.commit('registerStart')
            AuthService.register(user)
                .then(response => {
                    console.log('Response', response.data.user)
                    context.commit('registerSuccess',response.data.user)
                })
                .catch( error => {

                    context.commit('registerFailure',error.response.data)
                } )
        })
    }
}
export default  {
    state,
    mutations,
    actions
}