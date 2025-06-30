import { CheckIcon } from "../../../svgs/CheckIcon";


export const Feature = ({ feature }) => {
    return (
        <div className="flex items-center gap-2.5">
            <CheckIcon iconColor={"#8B96A5"} />
            <p>{feature}</p>
        </div>
    );
};
