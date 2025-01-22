import SearchableItem from "./SearchableItem";

export default function SearchableItemList({ clothingList }) {
    return(
        <div>
            <p>SeachableItemList works!</p>
            {clothingList.map((item) => (
                <SearchableItem key={item.id} item={item}/>
            ))}
        </div>
    );
}