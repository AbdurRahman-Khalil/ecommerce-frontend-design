import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { toast } from "react-hot-toast";

import productsData from "./ProductData";

import shuffleArray from "../../helpers/shuffleArray";



const productsStore = (set, get) => ({

    products: shuffleArray(productsData),

    cart: [],
    cartLength: 0,

    savedProducts: [],

    viewMode: "list",
    setViewMode: (mode) => set({ viewMode: mode }),


    // Actions
    addToCart: (product) => {
        try {
            const existingProduct = get().cart.find((item) => item.id === product.id);
            set((state) => {
                if (existingProduct) {
                    return {
                        cart: state.cart.map((item) =>
                            item.id === product.id
                                ? {
                                    ...item,
                                    quantity: item.quantity + 1,
                                    totalPrice: item.totalPrice + item.price
                                }
                                : item
                        ),
                        cartLength: state.cartLength + 1,
                    };

                } else {
                    return {
                        cart: [product, ...state.cart],
                        cartLength: state.cartLength + 1,
                    };
                }
            });
            toast.success(
                `Product added to cart successfully. ${existingProduct ? `x${existingProduct.quantity + 1}` : ""}
            `);

        } catch (err) {
            console.error(err);
            toast.error("Failed to add Product to cart.");
        }
    },

    removeFromCart: (productId) => {
        try {
            set((state) => {
                const productToRemove = state.cart.find((product) => product.id === productId);
                if (productToRemove) {
                    return {
                        cart: state.cart.filter((product) => product.id !== productId),
                        cartLength: state.cartLength - productToRemove.quantity, // Decrease cart length by the quantity of that removed item
                    };
                }
                return state;
            });
            toast.success("Product removed from cart successfully.");

        } catch (err) {
            console.error(err);
            toast.error("Failed to remove Product from cart.");
        }
    },

    increaseQuantity: (productId) => {
        try {
            set((state) => ({
                cart: state.cart.map((item) =>
                    item.id === productId
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                            totalPrice: item.totalPrice + item.price,
                        }
                        : item
                ),
                cartLength: state.cartLength + 1,
            }));

        } catch (err) {
            console.error(err);
            toast.error("Failed to increase quantity of the Product.");
        }
    },

    decreaseQuantity: (productId) => {
        try {
            set((state) => {
                const updatedCart = state.cart.map((item) =>
                    item.id === productId
                        ? {
                            ...item,
                            quantity: Math.max(item.quantity - 1, 1),
                            totalPrice: item.quantity > 1
                                ? item.totalPrice - item.price
                                : item.totalPrice,
                        }
                        : item
                );

                const decreasedLength = state.cart.find((item) => item.id === productId)?.quantity > 1
                    ? state.cartLength - 1
                    : state.cartLength;

                return {
                    cart: updatedCart,
                    cartLength: decreasedLength, // Adjust cart length based on decreased quantity of that item
                };
            });

        } catch (err) {
            console.error(err);
            toast.error("Failed to decrease quantity of the Product.");
        }
    },

    totalCartPrice: () => {
        return get().cart.reduce(
            (total, item) => total + item.totalPrice, 0
        );
    },

    clearCart: () => {
        const isAtCheckout = window.location.pathname.includes("/checkout");

        try {
            set(() => ({
                cart: [],
                cartLength: 0,
            }));

            if (!isAtCheckout) {
                toast.success("Cart has been cleared successfully.");
            }

        } catch (err) {
            console.error(err);

            if (!isAtCheckout) {
                toast.error("Failed to clear cart.");
            }
        }
    },

    saveProduct: (savedProduct) => {
        try {
            set((state) => ({
                savedProducts: [savedProduct, ...state.savedProducts],
                products: state.products.map((product) =>
                    product.id === savedProduct.id
                        ? { ...product, isSaved: true }
                        : product
                ),
            }));

        } catch (err) {
            console.error(err);
            toast.error("Failed to Save the Product.");
        }
    },

    unSaveProduct: (productId) => {
        try {
            set((state) => ({
                savedProducts: state.savedProducts.filter((item) => item.id !== productId),
                products: state.products.map((product) =>
                    product.id === productId
                        ? { ...product, isSaved: false }
                        : product
                ),
            }));

        } catch (err) {
            console.error(err);
            toast.error("Failed to unSave the Product.");
        }
    },

    addRating: (rating, productId) => {
        try {
            set((state) => ({
                products: state.products.map((p) =>
                    p.id === productId
                        ? {
                            ...p,
                            usersRatings: [rating, ...(p.usersRatings || [])],
                            rating: [rating, ...(p.usersRatings || [])]
                                .reduce((a, c) => a + c.rating, 0) / ((p.usersRatings || []).length + 1)
                        }
                        : p
                ),
            }));

        } catch (err) {
            console.error(err);
            toast.error("Failed to rate the Product.");
        }
    },
});


const useProductsStore = create(
    devtools(
        persist(productsStore, {
            name: "products",
            partialize: (state) => ({
                products: state.products,
                cart: state.cart,
                cartLength: state.cartLength,
                savedProducts: state.savedProducts,
            })
        })
    )
);

export default useProductsStore;




