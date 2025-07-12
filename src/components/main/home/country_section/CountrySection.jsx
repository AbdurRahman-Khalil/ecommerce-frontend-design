import { CountryCard } from "./CountryCard";

import countries from "../../../../data/countries";


export const CountrySection = () => {
    return (
        <section
            aria-label="Available Suppliers Regions"
            className="min-h-[138px] mt-[1.9rem] max-[1212px]:mx-5"
        >
            <h3 className="text-2xl font-semibold leading-8 mb-6">Suppliers by region</h3>
            <div className="grid grid-cols-1 min-[427px]:grid-cols-2 min-[626px]:grid-cols-3 min-[825px]:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-3.5">
                {
                    countries.map((country) => (
                        <CountryCard key={country.code} country={country} />
                    ))
                }
            </div>
        </section>
    );
};
