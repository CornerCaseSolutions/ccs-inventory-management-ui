export default function SearchBar(props) {
    return(
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={props.onSearch}/>
        </div>
    );
}