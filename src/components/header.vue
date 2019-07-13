<template>
    <nav>
        <ul>
            <li><router-link to="/"　exact>Blog</router-link></li>
            <li><router-link to="/add" exact>Add a New Blog</router-link></li>
        </ul>
    </nav>
</template>

<script>
</script>

<style scoped>

.router-link-active {
    background: #eee;
    color: #444;
}
</style>