<template>
    <main>
        <TopHeader />
        <BottomHeader />
        <div class="container">
            <slot />
        </div>
    </main>
</template>
<style lang="scss" scoped>
main {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: var(--bg-color);
}
</style>