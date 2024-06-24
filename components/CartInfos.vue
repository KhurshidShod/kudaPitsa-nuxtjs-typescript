<template>
    <div class="cart__infos">
        <h1>{{ $t('overall') }}</h1>
        <ol>
            <li v-for="prod in cartItems" :key="prod.id">
                <p>{{ prod.name }}</p>
                <div>
                    <p>x{{ prod.quantity }}</p>
                    <b>{{ prod.price * prod.quantity }} ₽</b>
                </div>
            </li>
        </ol>
        <input type="text" :placeholder="$t('cartComment')" name="" id="">
        <button>{{ cartItems.reduce((a: number, b: CartProduct) => a + (b.price * b.quantity), 0) }} ₽</button>
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
.cart__infos {
    width: 350px;
    background-color: #ffeee2;
    min-width: 250px;
    padding: .5rem;
    border-radius: 12px;
    border: 1px solid var(--color-orange);
    h1{
        color: var(--color-red);
    }

    ol {
        li {
            margin-block: 10px;
            padding-bottom: 5px;
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid var(--color-orange);
            div{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
    input{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid var(--color-orange);
        outline: none;
        background-color: transparent;
        padding-left: 0.5rem;
        &::placeholder{
            color: var(--color-red);
        }
    }
    button{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        font-weight: 600;
        color: white;
        background-color: var(--color-orange);
        margin-top: 1rem;
        border-radius: 5px;
        height: 50px;
        cursor: pointer;
    }
}
</style>