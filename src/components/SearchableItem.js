export default function SearchableItem({ item}) {

    return(
        <div>
            <p>SearchableItem -------------------------</p>
            <li>type = {item.type}</li>
            <li>color = {item.color}</li>
            <li>brand = {item.brand}</li>
            <button>details</button>
        </div>
    );
}