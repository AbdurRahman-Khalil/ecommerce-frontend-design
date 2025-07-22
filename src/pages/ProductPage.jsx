import { useEffect } from "react";

import { useParams } from "react-router-dom";

import useProductsStore from "../store/products/ProductsStore";

import { Breadcrumb } from "../components/main/product_page/breadcrumb/Breadcrumb";
import { ProductDetails } from "../components/main/product_page/product_details/ProductDetails";
import { BlueBanner } from "../components/BlueBanner";
import { Description } from "../components/main/product_page/description/Description";
import { YouMayLikeProducts } from "../components/main/product_page/you_may_like_products/YouMayLikeProducts";
import { RelatedProducts } from "../components/main/product_page/related_products/RelatedProducts";



export const ProductPage = () => {
    const products = useProductsStore((state) => state.products);

    const { pid } = useParams();

    const product = products.find(prod => prod.id === Number(pid));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <section
            aria-label="Product Page"
            className="mx-1 max-[1212px]:mx-0"
        >
            <Breadcrumb pCategory={product.category} pTitle={product.title} />
            <ProductDetails product={product} />
            <div 
                className="flex gap-[1.05rem] mt-[1.3rem] max-[1212px]:justify-between max-[735px]:flex-wrap"
            >
                <Description pDescription={product.description} pFeatures={product.features} />
                <YouMayLikeProducts products={products} />
            </div>
            <RelatedProducts products={products} />
            <BlueBanner />
        </section>
    );
};
