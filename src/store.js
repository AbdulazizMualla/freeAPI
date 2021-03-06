import {createStore} from "vuex";
const api_url = 'https://api.tawfig.info/api/';
export const store = createStore({
    state(){
        return{
            url_register: api_url+'register',
            url_login: api_url+'login',
            url_profile: api_url+'profile',
            url_add_photo: api_url+'photos',
            url_photos:  api_url+'photos',
            url_my_photos: api_url+'my-photos',
            url_my_photo_delete: api_url+'photos/',
            url_my_photo_force_delete: '',
            url_my_photo_deleted: api_url+'deleted-photos',
            access_token: localStorage.getItem('token'),
            user: JSON.parse(JSON.stringify(localStorage.getItem('user'))),
            routeFrom: ''
        }
    },
    mutations:{
        updateAccessToken(state, token){
            localStorage.setItem('token' , token)
            state.access_token  = `Bearer ${token}`;
        },
        updateUser(state, user){
            localStorage.setItem('user' , JSON.stringify(user))
            state.user  = user;
        },
        setForceDeletePhotoUrl(state , photoId){
            state.url_my_photo_force_delete = api_url+'photos/'+photoId+'/force-delete'
        }

    },
    actions:{
        updateValueToken(ctx , result){
           if (result.access_token){
               ctx.commit('updateAccessToken' , result.access_token);
           }
            ctx.commit('updateUser' , result.user);
        },
        setForceDeletePhotoUrlInMutations(ctx , photoId){
            ctx.commit('setForceDeletePhotoUrl' , photoId)
        }
    },
})