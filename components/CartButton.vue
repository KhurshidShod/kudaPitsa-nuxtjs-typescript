<template>
    <div>
        <NuxtLink to="/cart" class="cart_btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z" />
            </svg>
            <p>{{ cartItems.length }}</p>
        </NuxtLink>
    </div>
</template>
<script lang="ts" setup>
const cartStore = useCartStore();
const { cartItems } = storeToRefs(cartStore);
</script>
<style lang="scss" scoped>
div {
    width: 50px;

    a {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: var(--color-orange);
        color: white;
        ;
        font-size: 18px;
        font-weight: 700;
        z-index: 999;
        text-decoration: none;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        p {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 13px;
            width: 18px;
            height: 18px;
            background-color: white;
            border-radius: 50%;
            color: var(--color-orange);
            position: absolute;
            top: 0;
            right: 0;
            border: 1px solid var(--color-orange);
        }
    }
}
</style>