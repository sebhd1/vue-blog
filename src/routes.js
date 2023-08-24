import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import PostIndex from './components/PostIndex.vue';
import Post from './components/Post.vue';
import PostForm from './components/PostForm.vue';

export default [
    { path: '/', component: Home, name:'home'},
    { path: '/login', component: Login, name:'login'},
    { path: '/register', component: Register, name:'register'},
    { path: '/posts', component: PostIndex, children: [] },
    { path: '/post/creation', component: PostForm, name:'post-create'},
    { path: '/post/edit', component: PostForm, name:'post-edit'},
    { path: '/posts/post', component: Post, name:'post'},
]

//{ path: '/post/edit/:id', component: PostForm, name:'post-edit'},
//     { path: '/posts/:id', component: Post, name:'post'},