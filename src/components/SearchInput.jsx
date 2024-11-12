import SearchIcon from "../assets/images/search.svg";

const SearchInput = ({ onChange, value, ...props }) => {
  return (
    <div className="relative">
      <input
        type="text"
        className="py-2.5 pl-10 pr-4 bg-[#F9F9FC] text-[#687D92] focus:outline-none rounded-[6px]"
        value={value}
        onChange={onChange}
        {...props}
      />
      <img
        src={SearchIcon}
        width={16}
        height={16}
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
        alt="Szukaj"
      />
  
    </div>
  );
};

export default SearchInput;