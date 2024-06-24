<template>
    <div class="card">
        <div class="card_img">
            <img :src="product.image" alt="" />
            <p v-if="product.filter !== ''">{{ product.filter }}</p>
        </div>
        <div class="text">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <div>
                <button v-if="!cartItems.find((prod: CartProduct) => prod.id === product.id)" @click="(e) => {
                    addToCarts(product);
                    addToCartAnimation(e.target);
                }
                    ">
                    <p>{{ $t('tanlash') }}</p>
                    <span>{{ product.price }} ₽</span>
                </button>
                <div class="change_qty" v-else>
                    <button @click="cartStore.decreaseQuantity(product.id)">-</button>
                    <p>{{ cartItems.find((prod: CartProduct) => prod.id === product.id).quantity }}</p>
                    <button @click="cartStore.increaseQuantity(product.id)">+</button>
                </div>
                <p class="price">{{ product.price }} ₽</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { CartProduct, Product } from "~/types/types";

const { product } = defineProps<{
    product: {
        type: PropType<Product>;
        required: true;
    };
}>();
const cartStore = useCartStore();
const { cartItems } = storeToRefs(cartStore);

const addToCarts = (product: Product): void => {
    setTimeout(() => {
        cartStore.addToCart(product);
    }, 1100);
};

const addToCartAnimation = (e) => {
    const span = document.createElement("span");
    span.classList.add("animatingIcon");
    const parent = e.parentNode.parentNode.parentNode;
    let img = parent.querySelector("img");
    let flyingImg = img.cloneNode();
    flyingImg.classList.add("flyingImage");
    parent.appendChild(flyingImg);
    parent.style.position = "relative";
    const flyingImgPos: DOMRect = flyingImg.getBoundingClientRect();
    const cartBtnPos: DOMRect = document
        .querySelector(".cart_btn")
        ?.getBoundingClientRect();
    document.querySelector(".cart_btn").parentNode.style.width = "150px !important";
    let data = {
        left:
            cartBtnPos.left -
            (cartBtnPos.width / 3 + flyingImgPos.left + flyingImgPos.width / 3) -
            50,
        top: cartBtnPos.bottom - flyingImgPos.bottom + 150,
    };
    flyingImg.style.cssText = `
    --left: ${data.left.toFixed(2)}px;
    --top: ${data.top.toFixed(2)}px;`;
    setTimeout(() => {
        flyingImg.style.display = "none";
    }, 1100);
};
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--bgcolor-white);
    width: calc(100% / 4 - 30px);
    min-width: 250px;
    flex-grow: 0.5;
    max-width: 300px;
    border-radius: 12px;
    border: 1px solid var(--color-border);
    transition: 0.2s linear;
    z-index: 0 !important;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--color-orange);
        clip-path: circle(90px at 100% 100%);
        z-index: -1;
        transition: all 0.3s linear;
        border-bottom-right-radius: 12px;

        @media (max-width: 570px) {
            display: none;
        }
    }

    .price {
        color: white !important;
    }

    @media (max-width: 570px) {
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: start;
        gap: 5px;
        min-width: 200px;
        max-width: 100%;
    }

    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    cursor: pointer;

    &_img {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            position: absolute;
            left: 0;
            top: 25px;
            transform: translateY(-50%);
            z-index: 2;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 44px;
            height: 22px;
            font-size: 12px;
            font-weight: 400;
            color: white;
            line-height: 14px;
            flex-shrink: 0;
            background-color: #e23535;
        }

        @media (max-width: 570px) {
            width: 100px;
            height: 100%;
        }

        img {
            width: 100%;

            @media (max-width: 570px) {
                width: 100px;
                height: 100%;
                object-fit: contain;
            }
        }
    }

    .text {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-self: start;
        align-items: start;
        padding: 1rem;
        gap: 1rem;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .change_qty {
                width: 65%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                flex-wrap: nowrap;

                @media (max-width: 570px) {
                    justify-content: start;
                    gap: 1rem;
                }

                p {
                    color: var(--color-orange) !important;
                    display: block;
                }

                button {
                    max-width: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: .5rem 2rem;
                    font-size: 22px;

                    @media (max-width: 570px) {
                        background-color: #ffeee2 !important;
                        padding: 7px 16px !important;
                        color: var(--color-orange) !important;
                    }
                }
            }

            p {
                color: var(--color-orange);
                font-size: 18px;
                font-weight: 600;
                line-height: 24px;

                @media (max-width: 570px) {
                    display: none;
                }
            }

            button {
                display: "flex";
                justify-content: "center";
                align-items: "center";
                gap: ".5rem";
                color: "white";
                background-color: var(--color-orange);
                padding: 13px 32px;
                border-radius: 6px;
                font-size: 16px;
                transition: ".1s linear";
                cursor: pointer;
                color: white !important;

                span {
                    display: none;
                    pointer-events: none;
                    color: var(--color-orange);

                    @media (max-width: 570px) {
                        display: flex;
                    }
                }

                @media (max-width: 570px) {
                    background-color: #ffeee2 !important;
                    padding: 7px 16px !important;
                }

                p {
                    color: white;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 22px;
                    pointer-events: none;

                    @media (max-width: 570px) {
                        display: none;
                    }
                }
            }
        }

        @media (max-width: 570px) {
            padding-left: 0;
            padding-right: 5px;
            gap: 5px;
        }

        h3 {
            font-size: 18px;
            font-weight: 600;
            line-height: 24px;
            color: var(--fontColor-black);

            @media (max-width: 570px) {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
        }

        p {
            font-size: 16px;
            font-weight: 400;
            color: var(--fontColor-black);
            line-height: 22px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;

            @media (max-width: 570px) {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
        }
    }
}
</style>
