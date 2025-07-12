import avatarIcon from "../../../assets/svgs/hero/avatar.svg";


export const User = () => {
    return (
        <div className="bg-[#EFF2F4] p-[1.2rem]">
            <img src={avatarIcon} alt="avatar icon" />
            <div className="flex gap-1.5 mt-2">
                <button>Sign in</button>
                <p>|</p>
                <button>Register</button>
            </div>
        </div>
    );
};
