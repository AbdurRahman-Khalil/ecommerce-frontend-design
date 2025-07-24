import useProductsStore from "../../../store/products/ProductsStore";


export const CartHeader = () => {
    const cartLength = useProductsStore((state) => state.cartLength);

    return (
        <h3 className="font-semibold text-2xl leading-8 mb-[1.35rem] max-[1212px]:ml-5">
            {`My cart (${cartLength})`}
        </h3>
    );
};
