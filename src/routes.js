import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singleBlog.vue';
import gmap from './components/gmap.vue';

export default [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        component: showBlogs},
    {
        path: '/add', 
        component: addBlog
    },
    {
        path: '/gmap', 
        component: gmap, 
        props: {
            movie: this.google
        }
    },
    {
        path: '/blog/:id', 
        component: 
        singleBlog
    }
]

