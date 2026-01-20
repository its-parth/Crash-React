import { filterData } from "../data";
const FilterBar = (props) => {
    const { updateContent, category, setCategory } = props;
    return (
        <div className="filter-bar flex justify-center items-start gap-3 py-3">
            {
                filterData.map(type => (<p onClick={() => {
                    updateContent(type.title);
                    setCategory(type.title);
                }} className={`bg-gray-900 py-2 px-4 rounded-lg ${(category == type.title) ? 'border-2' : 'border-0'} border-white box-border h-11 flex justify-center items-center cursor-pointer`} key={type.id}>{type.title}</p>))
            }
        </div>
    )
}
export default FilterBar;