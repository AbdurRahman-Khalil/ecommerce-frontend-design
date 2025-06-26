
export const CountryCard = ({ country }) => {
    return (
        <div className="flex gap-3">
            <img src={country.flag} width={28} height={20} alt={`${country.country}'s flag`} />
            <div>
                <p className="">{country.country}</p>
                <p className="text-[0.8125rem] text-[#8B96A5] leading-[100%]">
                    {`shopname.${country.code}`}
                </p>
            </div>
        </div>
    );
};
