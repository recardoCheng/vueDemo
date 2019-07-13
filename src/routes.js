import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addBlog.vue'



export default [
    {path: '/', components: showBlogs},
    {path: '/add', components: addBlog}
]