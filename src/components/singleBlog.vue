<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                blog: {}
            }
        },

        created() {
            this.$http.get('https://tonal-loader-162104.firebaseio.com/posts/'+this.id+'.json').then( (data) => {
                return data.json();
            }).then(function(data){
                this.blog=data;
            })
        }
    }
</script>

