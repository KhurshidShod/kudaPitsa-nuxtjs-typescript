<template>
  <div class="main_menu">
    <div class="menu" :class="{ catFixed: catFixed }">
      <div class="menu__inner">
        <RouterLink class="menu__inner_item" v-for="link in links" @click="setActive(link.href)" :key="link.href"
          :to="{ hash: `#${link.href}` }" :class="{ 'sidebar-link--active': link.href === activeId }">
          <img :src="link.image" alt="" />
          <p>{{ link.label }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
  <HotSales />
  <CheckAddress />
  <section v-for="category in categories" :key="category.name" :id="category.name.toLowerCase()" ref="targets"
    class="products__wrapper">
    <ProductsHeader :category="category.name" />
    <div class="no_prod" v-if="!products.filter((prod: Product) => prod.category === category.name).length"
      style="">
      <img src="../assets/images/no-product.webp"
        alt="" />
    </div>
    <ProductCard v-else v-for="product in products.filter((prod: Product) => prod.category === category.name)"
      :product="product" :key="product.id" />
  </section>
</template>

<script lang="ts" setup>
import { categories } from "~/assets/data/categories";
import { useActiveScroll } from "vue-use-active-scroll";
import type { Links, Product } from "~/types/types";
import { products } from "~/assets/data/products";

const links = computed<Links[]>(() =>
  categories.map(({ name, image }) => ({
    href: name.toLowerCase(),
    label: name,
    image: image,
  }))
);
const targets = ref([]);
const catFixed: Ref<boolean> = useState("catFixed", () => false);

const { setActive, activeId } = useActiveScroll(targets);

onBeforeMount(() => {
  if (process.client) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 115) {
        catFixed.value = true;
      } else {
        catFixed.value = false;
      }
    });
  }
});
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: var(--bg-color);
  min-width: 750px;
  gap: 30px;
  overflow: auto;

  @media (max-width: 550px) {
    min-width: 99px;
    gap: 12px;
    flex-direction: row;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &.catFixed {
    position: fixed;
    width: 100%;
    left: 0;
    padding-left: 20px;
    padding-right: 20px;
    top: 0;
    height: 40px !important;
    overflow-y: hidden;
    z-index: 9;
    justify-content: space-between;
    gap: 10px !important;

    @media (max-width: 550px) {
      justify-content: start;
    }

    .menu__inner_item {
      height: 35px;
      align-items: center;

      img {
        display: none !important;
      }
    }
  }

  &__inner {
    width: 100%;
    min-width: 750px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 30px;

    @media (max-width: 550px) {
      min-width: 99px;
      gap: 12px;
      flex-direction: row;
    }

    &_item {
      width: calc(100% / 8);
      border-radius: 12px;
      background-color: var(--bgcolor-white);
      height: 104px;
      min-width: 135px;
      border: 1px solid var(--color-border);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.3rem;
      transition: all 0.1s linear;
      text-decoration: none;
      color: var(--fontColor-black);
      font-size: 18px;

      &.sidebar-link--active {
        color: var(--color-orange);
        border-color: var(--color-orange);
      }

      &:hover {
        color: var(--color-orange);
        border-color: var(--color-orange);
      }
    }
  }
}

.products__wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  padding-block: 1rem;
  .no_prod{
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 570px) {
    gap: 1rem;
  }
}
</style>
