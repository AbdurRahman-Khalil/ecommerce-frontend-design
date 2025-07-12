import { Collapsible } from "./Collapsible";

import categories from "../../../../data/categories";


export const CategoryFilter = ({ updateCheckbox, filters }) => {
    const filteredCategories = categories.filter(cat => cat !== "All Categories");

    return (
        <Collapsible title="Category" initialOpen={true}>
            <div className="space-y-5">
                {filteredCategories.map((cat) => (
                    <p
                        key={cat}
                        onClick={() => updateCheckbox("category", cat)}
                        className={`cursor-pointer leading-[100%] transitions 
                            ${filters.category.includes(cat)
                                ? "text-blue-400 hover:text-blue-500"
                                : "text-[#505050] hover:text-[hsl(0,0%,56%)]"
                        }`}
                    >
                        {cat}
                    </p>
                ))}
            </div>
        </Collapsible>
    );
};
