<template>
    <div id="add-blog">
        <h2 v-if="submitted">Thanks for your post</h2>
        <form v-if="!submitted">
            <h2>Add a new blog post</h2>
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required/>
            <label>Blog Ｃontent:</label>
            <textarea v-model="blog.content"></textarea>
            <div id="checkboxes">
                <label>A4</label>
                <input type="checkbox" value="a4" v-model="blog.categories">
                <label>Double Side</label>
                <input type="checkbox" value="doubleside" v-model="blog.categories">
            </div>
            <label>Gender:</label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{author}}</option>
            </select>
            <p></p>
            <button @click.prevent="postBlog">Add Blog</button>
        </form>
        <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog title: {{this.blog.title}}</p>
        <p>Blog content: </p>
        <p>{{this.blog.content}}</p>
        <ul>
            <li v-for="category in blog.categories">{{category}}</li>
        </ul>
        <label>Gender:</label>
        <p>{{blog.author}}</p>
        </div>
    </div>
</template>

<script>

export default {
    components: {
    },

    data () {
        return {
            submitted: false,
            authors: ["male", "female", "n/a"],
            blog: {
                title:'',
                content:'',
                categories:[],
                author: "female"
            }
        }
    },

    methods: {
        postBlog() {
            this.$http.post('https://tonal-loader-162104.firebaseio.com/posts.json', this.blog).then(function(data) {
                console.log(data);
                this.submitted=!this.submitted;
            })
        }
    },

    created() {
        console.log("addBlog created");
    },


    beforeDestroy() {
        console.log("addBlog beforeDestroy");
    },

    destroyed() {
        console.log("addBlog destroyed");
    }

}
</script>

<style>

#add-blog {
    margin: 20px auto;
    max-width: 500px;
}

label {
    display: block;
    margin: 20px 0 10px;
}

input[type="text"], textarea {
    display: block;
    width: 100%;
    padding: 8px;
}

#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}

h3 {
    margin-top: 10px;
}


#checkboxes input {
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label {
    display: inline-block;
}

</style>
