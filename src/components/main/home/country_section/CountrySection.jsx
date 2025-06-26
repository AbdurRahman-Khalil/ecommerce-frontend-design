import { CountryCard } from "./CountryCard";

import countries from "../../../../data/countries";


export const CountrySection = () => {
    return (
        <section aria-label="Available Suppliers Regions" className="min-h-[138px] mt-[1.9rem]">
            <h3 className="text-2xl font-semibold leading-8 mb-6">Suppliers by region</h3>
            <div className="grid grid-cols-5 gap-3">
                {
                    countries.map((country) => (
                        <CountryCard key={country.code} country={country} />
                    ))
                }
            </div>
        </section>
    );
};
