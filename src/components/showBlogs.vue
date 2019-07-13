<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="searchText"/>
        <div v-for="blog in searchBlog" class="single-blog"> 
           <router-link :to="'/blog/'+blog.id"> <h2 v-rainbow>{{blog.title|toUpperCase}}</h2> </router-link>
           <article>{{blog.body}}</article>
        </div>
       
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            blogs: [],
            searchText: ''
        }
    },

    methods: {
    },

    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then( (data) => {
            this.blogs = data.body.slice(0,10);
        })
    },

    directives: {
        'rainbow': {
            bind(el, binding, vnode) {
                el.style.color="#" + Math.random().toString(16).slice(2,8);
            }
        }
    },

    filters: {
        toUpperCase(value) {
            return value.toUpperCase();
        }

    },

    computed: {
        searchBlog() {
            return this.blogs.filter((blog) => {
                return blog.title.includes(this.searchText.toLowerCase());
            })
        }
    }
}
</script>

<style>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eeeeee
}
</style>
