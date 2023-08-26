import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import PostForm from './components/PostForm.vue';
import Logout from './components/Logout.vue';
import PostView from './views/PostView.vue';
import Post from './components/Post.vue';
import PostList from './components/PostList.vue';


export default [
    { path: '/', component: Home, name: 'home' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/logout', component: Logout, name: 'logout' },
    { path: '/register', component: Register, name: 'register' },
    {
        path: '/posts', component: PostView, name: 'posts', children: [
            {
                path: '',
                component: PostList,
                name: 'posts.index',
            },

            {
                path: 'create',
                component: PostForm,
                name: 'posts.create',
            },

            {
                path: ':id',
                component: Post,
                name: 'posts.show',
            }
        ]
    },
]

/* { path: '/posts', component: PostIndex, children: [] },
   { path: '/post/edit', component: PostForm, name:'post-edit'},
   ,*/

//{ path: '/post/edit/:id', component: PostForm, name:'post-edit'},
//     { path: '/posts/:id', component: Post, name:'post'},