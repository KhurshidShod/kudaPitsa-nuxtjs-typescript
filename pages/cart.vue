<template>
    <section class="cart">
        <h1 v-if="cartItems.length > 0">{{ $t('readyCart') }} 🛒 ✅</h1>
        <div class="cart__wrapper">
            <CartProductsWrapper :cartItems="cartItems" />
            <CartInfos v-if="cartItems.length > 0" :cartItems="cartItems" />
        </div>
        <NuxtLink to="/" class="go_back">Back to Main Page</NuxtLink>
    </section>
</template>
<script lang="ts" setup>
const cartStore = useCartStore();
const { cartItems } = storeToRefs(cartStore);
</script>
<style lang="scss" scoped>
.cart {
    min-height: calc(100vh - 110px);

    h1 {
        padding-block: 1rem;
        color: var(--fontColor-black);
    }

    .go_back {
        color: var(--color-orange);
    }

    width: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    flex-wrap: wrap;

    div.cart__wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: start;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
}
</style>