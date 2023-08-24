import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import PostIndex from './components/PostIndex.vue';
import PostForm from './components/PostForm.vue';
import Logout from './components/Logout.vue';


export default [
    { path: '/', component: Home, name: 'home'},
    { path: '/login', component: Login, name:'login'},
    { path: '/logout', component: Logout, name: 'logout'},
    { path: '/register', component: Register, name: 'register'},
    { path: '/posts', component: PostIndex, name:'posts'},
    { path: '/post/creation', component: PostForm, name: 'post-create'},
   /* { path: '/posts', component: PostIndex, children: [] },
    { path: '/post/edit', component: PostForm, name:'post-edit'},
    ,*/
]

//{ path: '/post/edit/:id', component: PostForm, name:'post-edit'},
//     { path: '/posts/:id', component: Post, name:'post'},