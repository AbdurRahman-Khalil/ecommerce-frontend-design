import unitedKingdomFlag from "../assets/svgs/flags/united_kingdom.svg";
import unitedStatesFlag from "../assets/svgs/flags/united_states.svg";
import australiaFlag from "../assets/svgs/flags/australia.svg";
import denmarkFlag from "../assets/svgs/flags/denmark.svg";
import franceFlag from "../assets/svgs/flags/france.svg";
import germanyFlag from "../assets/svgs/flags/germany.svg";
import italyFlag from "../assets/svgs/flags/italy.svg";
import russiaFlag from "../assets/svgs/flags/russia.svg";
import chinaFlag from "../assets/svgs/flags/china.svg";
import uaeFlag from "../assets/svgs/flags/uae.svg";


const countriesData = [
    {
        code: 'gb',
        country: 'United Kingdom',
        language: 'English',
        flag: unitedKingdomFlag,
        currency: 'GBP'
    },
    {
        code: 'us',
        country: 'United States',
        language: 'English',
        flag: unitedStatesFlag,
        currency: 'USD'
    },
    {
        code: 'au',
        country: 'Australia',
        language: 'English',
        flag: australiaFlag,
        currency: 'AUD'
    },
    {
        code: 'dk',
        country: 'Denmark',
        language: 'Danish',
        flag: denmarkFlag,
        currency: 'DKK'
    },
    {
        code: 'fr',
        country: 'France',
        language: 'French',
        flag: franceFlag,
        currency: 'EUR'
    },
    {
        code: 'de',
        country: 'Germany',
        language: 'German',
        flag: germanyFlag,
        currency: 'EUR'
    },
    {
        code: 'it',
        country: 'Italy',
        language: 'Italian',
        flag: italyFlag,
        currency: 'EUR'
    },
    {
        code: 'ru',
        country: 'Russia',
        language: 'Russian',
        flag: russiaFlag,
        currency: 'RUB'
    },
    {
        code: 'cn',
        country: 'China',
        language: 'Chinese',
        flag: chinaFlag,
        currency: 'CNY'
    },
    {
        code: 'ae',
        country: 'UAE',
        language: 'Arabic',
        flag: uaeFlag,
        currency: 'AED'
    }
];

export default countriesData;