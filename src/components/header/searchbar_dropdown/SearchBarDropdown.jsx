import { SearchBar } from './SearchBar';
import { CategoryDropdown } from '../../dropdowns/CategoryDropdown';
import { SearchBtn } from './SearchBtn';


export const SearchBarDropdown = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex h-11 border-2 border-[#0067FF] rounded-lg
            max-[779px]:justify-between max-[779px]:order-3 max-[779px]:w-full"
        >
            <SearchBar />
            <CategoryDropdown variant={"default"} />
            <SearchBtn />
        </form>
    );
};
