<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="searchText"/>
        <div v-for="blog in searchBlog" class="single-blog"> 
           <router-link :to="'/blog/'+blog.id"> <h2 v-rainbow>{{blog.title|toUpperCase}}</h2> </router-link>
           <article>{{blog.content}}</article>
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

    watch: {
        '$route' (to, from) {
            console.log('showBlogs route watch, ', 'to:', to, 'from:', from);
        }
    },


    beforeRouteEnter (to, from, next) {
        console.log('showBlogs beforeRouteEnter');
        next();
    },

    beforeRouteUpdate (to, from, next) {
        console.log('showBlogs beforeRouteUpdate');
        next();
    },

    beforeRouteLeave(to, from, next){
        console.log('showBlogs beforeRouteLeave');
        next();
    },


    beforeCreate() {
      console.log("showBlogs beforeUpdate");
    },

    created() {
        console.log("showBlogs created");
        this.$http.get('https://tonal-loader-162104.firebaseio.com/posts.json').then( (data) => {
            return data.json();
        }).then(function(data) {
            var blogsArray=[];
            for (let key in data) {
                data[key].id=key;
                blogsArray.push(data[key]);
            }
            this.blogs=blogsArray;
        })
    },

    beforeMount() {
        console.log("showBlogs beforeMount");
    },

    mounted() {
        console.log("showBlogs mounted");
    },

    beforeUpdate() {
      console.log("showBlogs beforeUpdate");
    },

    updated() {
      console.log("showBlogs updated");
    },

    activated() {
      console.log("showBlogs activated");
    },

    deactivated() {
      console.log("showBlogs deactivated");
    },

    beforeDestroy() {
        console.log("showBlogs beforeDestroy");
    },

    destroyed() {
        console.log("showBlogs destroyed");
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
