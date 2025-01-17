import React from "react";

import './App.css';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import SearchableItemList from './components/SearchableItemList'

function App() {
  const clothing = [
    {
      id: 1,
      type: 'SHIRT',
      color: 'white',
      brand: 'Broaks Brothers',
    }, {
      id: 2,
      type: 'OUTERWEAR',
      color: 'Red',
      brand: 'South Face',
    }, {
      id: 3,
      type: 'SHIRT',
      color: 'Blue',
      brand: 'Lala Lemon',
    }, {
      id: 4,
      type: 'PANTS',
      color: 'Blue',
      brand: 'Lands Start',
    }, {
      id: 5,
      type: 'SHOES',
      color: 'Black',
      brand: 'Mike',
    },
  ];

  const [searchTerm, setSearchState] = React.useState('');
  function handleSearch(event) {
      console.log("value: " + event.target.value);
      setSearchState(event.target.value);
  }

  const searchedClothing = clothing.filter((item) => {
    return item.type.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <NavigationBar />
      <SearchBar search={searchTerm} onSearch={handleSearch}/>
      <SearchableItemList clothingList={searchedClothing}/>
    </div>
  );
}

export default App;
