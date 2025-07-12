import { useState } from 'react';

import { BaseDropdown } from './BaseDropdown';
import { ExpandMore } from '../svgs/ExpandMore';
import { Flag } from '../Flag';

import countriesData from '../../data/countries';



export const CountrySelector = () => {
    const [selectedCountry, setSelectedCountry] = useState(countriesData[5]);

    const renderTrigger = (selected, isOpen) => (
        <>
            <div className="flex items-center gap-1.5 mr-0.5">
                <span className="font-medium">Ship to</span>
                <Flag imgSrc={selected.flag} imgAlt={`${selected.country} flag`} />
            </div>
            <ExpandMore
                svgAnimations={{ rotate: isOpen ? 0 : 180 }}
                fillColor={"#8B96A5"}
            />
        </>
    );

    const renderOption = (option, selected) => (
        <>
            <Flag imgSrc={option.flag} imgAlt={`${option.country} flag`} />
            <span className={`text-[0.925rem] ${option.code === selected.code ? 'font-medium' : ''}`}>
                {option.country}
            </span>
        </>
    );


    return (
        <BaseDropdown
            options={countriesData}
            selectedOption={selectedCountry}
            onSelect={setSelectedCountry}
            renderTrigger={renderTrigger}
            renderOption={renderOption}
            dropdownBtnStyles={"p-1 rounded-md focus:ring-2 focus:ring-blue-500 max-[479px]:hidden"}
            align={"right"}
        />
    );
};