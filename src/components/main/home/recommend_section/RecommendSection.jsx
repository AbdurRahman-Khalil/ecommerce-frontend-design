import { RecommendedItem } from "./RecommendedItem";

import img1  from "../../../../assets/images/cloth/1.png";
import img2  from "../../../../assets/images/cloth/3.jpg";
import img3  from "../../../../assets/images/cloth/7.png";
import img4  from "../../../../assets/images/cloth/6.png";
import img5  from "../../../../assets/images/cloth/5.png";
import img6  from "../../../../assets/images/cloth/4.png";
import img7  from "../../../../assets/images/tech/9.png";
import img8  from "../../../../assets/images/interior/3.png";
import img9  from "../../../../assets/images/tech/10.png";



const products = [
    {
        id: 1,
        title: "T-shirts with multiple colors, for men",
        price: 10.30,
        img: img1,
    },
    {
        id: 2,
        title: "Brown winter coat medium size",
        price: 10.30,
        img: img2,
    },
    {
        id: 3,
        title: "Jeans shorts for men blue color",
        price: 12.50,
        img: img3,
    },
    {
        id: 4,
        title: "Blue wallet for men leather metarial",
        price: 34.00,
        img: img4,
    },
    {
        id: 5,
        title: "Jeans bag for travel for men",
        price: 99.00,
        img: img5,
    },
    {
        id: 6,
        title: "Jeans shorts for men blue color",
        price: 9.99,
        img: img6,
    },
    {
        id: 7,
        title: "Headset for gaming with mic",
        price: 8.99,
        img: img7,
    },
    {
        id: 8,
        title: "Jeans bag for travel for men",
        price: 10.30,
        img: img5,
    },
    {
        id: 9,
        title: "Clay pot for drinking water brown color",
        price: 10.30,
        img: img8,
    },
    {
        id: 10,
        title: "Electric kattle dark black color",
        price: 80.95,
        img: img9,
    },
];



export const RecommendSection = () => {
    return (
        <section aria-label="Recommended Products" className="min-h-[696px] mt-[1.9rem]">
            <h3 className="text-2xl font-semibold leading-8 mb-6">Recommended items</h3>
            <div id="recommended-items" className="grid grid-cols-5 gap-x-4 gap-y-5">
                {products.map((product) => (
                    <RecommendedItem key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};
