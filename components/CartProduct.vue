<template>
    <div class="cart__product">
        <img :src="product.image" alt="">
        <div class="cart__product_infos">
            <p class="cart__product_infos_name"><b>{{ product.name }}</b> <span v-if="product.filter !== ''"><i>{{
                product.filter && product.filter }}</i></span></p>
            <i class="cart__product_infos_desc">{{ product.description }}</i>
            <b class="cart__product_infos_price">{{ product.price }} ₽</b>
        </div>
        <div class="cart__product_actions">
            <button @click="cartStore.decreaseQuantity(product.id)">-</button>
            <p>{{ product.quantity }}</p>
            <button @click="cartStore.increaseQuantity(product.id)">+</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Product } from '~/types/types';

const cartStore = useCartStore();

const { product } = defineProps<{
    product: {
        type: Product,
        required: true
    }
}>()
</script>
<style lang="scss" scoped>
.cart__product {
    width: 100%;
    background-color: white;
    border: 1px solid var(--color-orange);
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: 65px;
    padding: 5px;
    border-radius: 7px;
    gap: 1rem;
    font-family: 'Montserrat Alternates';
    background-color: #ffeee2;

    img {
        height: 60px;
        border-radius: 50%;
    }

    &_infos {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: start;
        flex-direction: column;
        color: var(--fontColor-black);
        flex-grow: 1;

        &_name {
            b {
                font-weight: 700;
                color: black;
            }

            span {
                background-color: var(--color-red);
                color: white;
                padding: 3px;
                font-size: 12px;
                border-radius: 3px;

            }
        }

        &_price {
            color: var(--color-orange);
        }

        &_desc {
            color: black;
        }
    }

    &_actions {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-right: 1rem;
        gap: 10px;

        p {
            font-size: 20px;
        }

        button {
            padding: .4rem 1.5rem;
            font-size: 18px;
            border-radius: 5px;
            background-color: var(--color-orange);
            color: white;
            cursor: pointer;
        }
    }
}
</style>