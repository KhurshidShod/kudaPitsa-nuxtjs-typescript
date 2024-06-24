<template>
    <div>
        <h1>{{ category }}</h1>
        <button>{{ $t('filter') }}</button>
    </div>
</template>
<script lang="ts" setup>
const { category } = defineProps(['category'])
</script>
<style lang="scss" scoped>
div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-block: 1rem;

    h1 {
        font-size: 42px;
        color: var(--fontColor-black);
    }

    button {
        padding: .5rem 1.2rem;
        border: 2px solid var(--color-orange);
        color: white;
        font-size: 16px;
        color: white;
        border-radius: 7px;
        cursor: pointer;
        background-color: transparent;
        color: var(--color-orange);
        font-weight: 600;
    }
}
</style>