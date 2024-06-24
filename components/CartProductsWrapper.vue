<template>
    <div class="products">
        <div class="products__wrapper">
            <h3 v-if="cartItems.length === 0">{{ $t('emptyCart') }} 😕</h3>
            <CartProduct v-else v-for="product in cartItems" :key="product.id" :product="product" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { CartProduct } from '~/types/types';

const { cartItems } = defineProps<{
    cartItems: {
        type: CartProduct[],
        required: true
    }
}>()
</script>
<style lang="scss" scoped>
.products {
    width: calc(100% - 350px - 2rem);
    min-width: 500px;
    flex-grow: 1;

    &__wrapper {
        width: 100%;
        padding: 1rem;
        display: flex;
        justify-content: start;
        align-items: start;
        flex-direction: column;
        gap: 1rem;
        padding-top: 0;
        padding-left: 0;

        h3 {
            width: 100%;
            text-align: center;
            margin-block: 2rem;
            color: var(--fontColor-black);
        }
    }
}
</style>