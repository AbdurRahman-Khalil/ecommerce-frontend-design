
export const Flag = ({ imgSrc, imgAlt }) => {
    return (
        <img
            src={imgSrc}
            className="w-5 h-4 mr-2 object-cover"
            alt={imgAlt}
        />
    );
};
