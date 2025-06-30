import { useEffect } from "react";

import { useParams } from "react-router-dom";

import useProductsStore from "../store/products/ProductsStore";

import { Breadcrumb } from "../components/main/product_details/breadcrumb/Breadcrumb";
import { ProductDetails } from "../components/main/product_details/ProductDetails";
import { BlueBanner } from "../components/BlueBanner";
import { Description } from "../components/main/product_details/description/Description";
import { YouMayLikeProducts } from "../components/main/product_details/you_may_like_products/YouMayLikeProducts";
import { RelatedProducts } from "../components/main/product_details/related_products/RelatedProducts";



export const ProductPage = () => {
    const products = useProductsStore((state) => state.products);

    const { pid } = useParams();

    const product = products.find(prod => prod.id === Number(pid));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <section aria-label="Product Details" className="mx-1">
            <Breadcrumb pCategory={product.category} pTitle={product.title} />
            <ProductDetails product={product} />
            <div className="flex gap-[1.05rem] mt-[1.3rem]">
                <Description pDescription={product.description} pFeatures={product.features} />
                <YouMayLikeProducts products={products} />
            </div>
            <RelatedProducts products={products} />
            <BlueBanner />
        </section>
    );
};
