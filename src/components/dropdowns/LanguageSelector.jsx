import { useState } from 'react';

import { BaseDropdown } from './BaseDropdown';
import { ExpandMore } from '../svgs/ExpandMore';
import { Flag } from '../Flag';

import countriesData from '../../data/countries';



export const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(countriesData[1]);

    const renderTrigger = (selected, isOpen) => (
        <>
            <div className="flex items-center">
                <Flag imgSrc={selected.flag} imgAlt={`${selected.country} flag`} />
                <span className="text-[#606060]">{selected.language}</span>
            </div>
            <ExpandMore
                svgAnimations={{ rotate: isOpen ? 180 : 0 }}
                fillColor={"#1C1C1C"}
            />
        </>
    );

    const renderOption = (option, selected) => (
        <>
            <Flag imgSrc={option.flag} imgAlt={`${option.country} flag`} />
            <span className={`text-[0.925rem] ${option.code === selected.code ? 'font-medium' : ''}`}>
                {option.language}
            </span>
        </>
    );


    return (
        <BaseDropdown
            options={countriesData}
            selectedOption={selectedLanguage}
            onSelect={setSelectedLanguage}
            renderTrigger={renderTrigger}
            renderOption={renderOption}
            dropdownBtnStyles={"p-1 rounded-md focus:ring-2 focus:ring-blue-500"}
            position={"top"}
            align={"right"}
        />
    );
};