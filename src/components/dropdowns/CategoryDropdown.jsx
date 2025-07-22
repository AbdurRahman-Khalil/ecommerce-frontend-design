import { useState } from 'react';

import { Link } from 'react-router-dom';

import { BaseDropdown } from './BaseDropdown';
import { ExpandMore } from '../svgs/ExpandMore';

import categories from '../../data/categories';

import menuIcon from "../../assets/svgs/header_svgs/menu.svg";



export const CategoryDropdown = ({ variant = 'default' }) => {
    const [selectedCategory, setSelectedCategory] = useState('All Categories');

    const renderTrigger = (selected, isOpen) => {
        if (variant === 'menu') {
            return (
                <>
                    <img src={menuIcon} alt="menu_icon" />
                    <span className="truncate font-medium">{selected}</span>
                </>
            );
        }

        return (
            <>
                <span className="truncate w-[140px]">{selected}</span>
                <ExpandMore
                    svgAnimations={{ rotate: isOpen ? 0 : 180 }}
                    fillColor={"#8B96A5"}
                />
            </>
        );
    };

    const renderOption = (option, selected) => {
        if (variant === "menu") {
            return (
                <Link to={"/products"} className={`w-full h-full ${option === selected ? 'font-medium' : ''}`}>
                    {option}
                </Link>
            );
        }

        return (
            <span className={option === selected ? 'font-medium' : ''}>
                {option}
            </span>
        );
    };

    const getClassName = () => {
        if (variant === 'menu') {
            return "justify-between gap-2.5 pl-1 py-1 rounded-md focus:ring-2 focus:ring-blue-500";
        }
        return "justify-between h-full pl-3.5 pr-2 border-r border-l border-[#127FFF] hover:bg-gray-50 focus:bg-gray-50 transitions max-[567px]:hidden min-[780px]:max-[1123px]:hidden";
    };


    return (
        <BaseDropdown
            options={categories}
            selectedOption={selectedCategory}
            onSelect={setSelectedCategory}
            renderTrigger={renderTrigger}
            renderOption={renderOption}
            width={`${variant === 'default' ? "w-full" : "w-40"}`}
            height={"min-h-max"}
            dropdownBtnStyles={getClassName()}
        />
    );
};