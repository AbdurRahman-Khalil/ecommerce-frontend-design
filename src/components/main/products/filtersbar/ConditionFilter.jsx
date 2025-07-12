import { Collapsible } from "./Collapsible";


const CONDITIONS = ["Any", "Brand new", "Old items", "Refurbished"];

export const ConditionFilter = ({ filters, setFilters }) => {
    // Get the current selection or fallback to "Any"
    const selected = filters.condition[0] || "Any";

    const handleRadioChange = (value) => {
        setFilters({
            ...filters,
            condition: value === "Any" ? [] : [value],
        });
    };


    return (
        <Collapsible title="Condition" initialOpen={true} marginBottom={"mb-[1.35rem]"}>
            <ul className="space-y-2">
                {CONDITIONS.map((cond) => (
                    <li key={cond}>
                        <label className="inline-flex gap-3 items-center cursor-pointer text-[#1c1c1c] hover:text-[hsl(0,0%,36%)]">
                            <input
                                type="radio"
                                name="condition"
                                value={cond}
                                checked={selected === cond || (cond === "Any" && filters.condition.length === 0)}
                                onChange={() => handleRadioChange(cond)}
                                className="accent-blue-600 w-5 h-5"
                            />
                            <span>{cond}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </Collapsible>
    );
};
