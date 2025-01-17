export default function SearchableItem(props) {

    return(
        <div>
            <p>SearchableItem -------------------------</p>
            <li>type = {props.item.type}</li>
            <li>color = {props.item.color}</li>
            <li>brand = {props.item.brand}</li>
            <button>details</button>
        </div>
    );
}