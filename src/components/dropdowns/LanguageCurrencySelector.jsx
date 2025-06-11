import { useState } from 'react';

import { BaseDropdown } from './BaseDropdown';
import { ExpandMore } from '../svgs/ExpandMore';
import { Flag } from '../Flag';

import countriesData from '../../data/countries';



export const LanguageCurrencySelector = () => {
    const [selectedLanguageCurrency, setSelectedLanguageCurrency] = useState(countriesData[1]);

    const renderTrigger = (selected, isOpen) => (
        <>
            <span className="font-medium mr-1">{selected.language}, {selected.currency}</span>
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
                {option.language}, {option.currency}
            </span>
        </>
    );


    return (
        <BaseDropdown
            options={countriesData}
            selectedOption={selectedLanguageCurrency}
            onSelect={setSelectedLanguageCurrency}
            renderTrigger={renderTrigger}
            renderOption={renderOption}
            dropdownBtnStyles={"p-1 rounded-md focus:ring-2 focus:ring-blue-500"}
            align={"right"}
        />
    );
};