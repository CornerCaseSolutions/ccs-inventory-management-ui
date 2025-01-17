import SearchableItem from "./SearchableItem";

export default function SearchableItemList(props) {
    return(
        <div>
            <p>SeachableItemList works!</p>
            {props.clothingList.map((item) => (
                <SearchableItem key={item.id} item={item}/>
            ))}
        </div>
    );
}