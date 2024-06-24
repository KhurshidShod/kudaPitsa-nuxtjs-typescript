import type { CartProduct, Product } from "~/types/types";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cartItems: [] as CartProduct[],
    };
  },
  actions: {
    addToCart(product: Product) {
      const prodExist = this.cartItems.find((prod) => prod.id === product.id);
      if (prodExist) {
        this.cartItems[this.cartItems.indexOf(prodExist)].quantity += 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
      console.log(this.cartItems);
      // this.cartItems.push(product);
    },
    increaseQuantity(id){
      this.cartItems.map((prod: CartProduct) => {
        if (prod.id === id) {
          prod.quantity++;
        }
        return prod;
      });
      console.log(this.cartItems)
    },
    decreaseQuantity(id: String) {
          if (
            this.cartItems.find((prod: CartProduct) => prod.id === id)
              ?.quantity === 1
          ) {
            this.cartItems = this.cartItems.filter(
              (prod: CartProduct) => prod.id !== id
            );
          } else {
            this.cartItems.map((prod: CartProduct) => {
              if (prod.id === id) {
                prod.quantity--;
              }
              return prod;
            });
          }
          console.log(this.cartItems)
    },
  },
});
