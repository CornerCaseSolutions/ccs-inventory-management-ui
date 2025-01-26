import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import './App.css';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import SearchableItemList from './components/SearchableItemList'
import { Container } from '@mui/material';

function App() {
  const initialClothingList = [
    {
      id: 1,
      type: 'SHIRT',
      color: 'White',
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
    }, {
      id: 6,
      type: 'VEST',
      color: 'Brown',
      brand: 'Lands Start',
    }, {
      id: 7,
      type: 'UNDERWEAR',
      color: 'Black',
      brand: 'Fruit of the Tree? idk lol',
    }, {
      id: 8,
      type: 'MISCELLANEOUS',
      color: 'Purple',
      brand: 'Random Co',
    }, {
      id: 9,
      type: 'HAT',
      color: 'White',
      brand: 'Mike',
    }, {
      id: 10,
      type: 'SHIRT',
      color: 'Orange',
      brand: 'Puma',
    }, {
      id: 11,
      type: 'SOCKS',
      color: 'Red',
      brand: 'Vans',
    }, {
      id: 12,
      type: 'OUTERWEAR',
      color: 'Gray',
      brand: 'Papagonia',
    },
  ];

  let [searchTerm, setSearchState] = useState('');
  let [typeSelect, setTypeState] = useState('');
  let [clothingStateList, setClothingState] = useState(initialClothingList)
  
  function handleSearch(event) {
      setSearchState(event.target.value);
  }

  function handleSelect(event) {
    setTypeState(event.target.value);
  }

  function removeClothingItem(item) {
    const newClothingList = clothingStateList.filter(
      (clothing) => item.id !== clothing.id
    );
    setClothingState(newClothingList);
  }

  const searchedClothingList = initialClothingList.filter((item) => {
    return item.brand.toLowerCase().includes(searchTerm.toLowerCase()) && item.type.toLowerCase().includes(typeSelect.toLowerCase());
  });

  return (
    <div className="App">
      <Box sx={{
        mb: 5
        }}>
        <NavigationBar />
      </Box>
      <Container maxWidth="xl">
        <Stack fullWidth>
          <Box sx={{ display: 'flex' }} fullWidth>
            <SearchBar search={searchTerm} onSearch={handleSearch} selectedType={typeSelect} onSelect={handleSelect}/>
          </Box>
          <SearchableItemList clothingList={searchedClothingList} onRemoveItem={removeClothingItem}/>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
