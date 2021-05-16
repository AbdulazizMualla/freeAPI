import {createRouter , createWebHistory} from "vue-router";
import Index from './components/Index.vue';
import Doc from './components/Doc.vue';
import Test from './components/Test.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Profile from "./components/Profile.vue";
import CPhotos from "./components/CPhotos.vue";
import CCreatePhoto from "./components/CCreatePhoto.vue";
import CMyPhoto from "./components/CMyPhoto.vue";
import CTrash from "./components/CTrash.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component: Index,
            name: 'home'
        },
        {
            path:'/doc',
            component: Doc,
            name: 'doc'
        },
        {
            path:'/test',
            component: Test,
            name: 'test',
            children: [
                {
                    path:'/test/register',
                    component: Register,
                    name: 'register'
                },
                {
                    path:'/test/login',
                    component: Login,
                    name: 'login'
                },
                {
                    path:'/test/profile',
                    component: Profile,
                    name: 'profile'
                },
                {
                    path:'/test/photos',
                    component:CPhotos,
                    name:'photos'
                },
                {
                    path:'/test/add-photo',
                    component:CCreatePhoto,
                    name:'add-photo'
                },
                {
                    path:'/test/my-photo',
                    component:CMyPhoto,
                    name:'my-photo'
                },
                {
                    path:'/test/trash',
                    component:CTrash,
                    name:'trash'
                }
            ]
        },
    ],
})