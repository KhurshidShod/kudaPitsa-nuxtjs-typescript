<template>
    <MainContent />
    <CartButton />
</template>
<script setup lang="ts">


</script>
<style lang="scss" scoped>
nav {
    width: 100%;
    position: fixed;
    top: 50px;

    .router-link-active {
        color: black;
        text-decoration: none;

        &.sidebar-link--active {
            color: red;
            border-bottom: 1px solid;
        }
    }
}
</style>