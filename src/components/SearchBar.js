import { 
    Box, 
    Select, 
    InputLabel, 
    MenuItem, 
    FormControl,
    TextField 
} from '@mui/material';

export default function SearchBar({search, onSearch, selectedType, onSelect}) {
    const clothingTypes = {
        OUTERWEAR: "outerwear",
        SHIRT: "shirt",
        VEST: "vest",
        PANTS: "pants",
        UNDERWEAR: "underwear",
        SOCKS: "socks",
        GLOVES: "gloves",
        SCARF: "scarf",
        HAT: "hat",
        GLASSES: "glasses",
        JEWELERY: "jewelery",
        SHOES: "shoes",
        MISCELLANEOUS: "miscellaneous"
    }

    return(
        <Box sx={{ minWidth: '30%', maxWidth: '50%'}}>
            <TextField id="outlined-basic" label="Brand" variant="outlined" value={search} onChange={onSearch} sx={{ width: '49%', mr: '2%' }}/>
            <FormControl sx={{ width: '49%' }}>
                <InputLabel>Clothing Type</InputLabel>
                <Select
                labelId='type-select-field'
                value={selectedType}
                label="Clothing Type"
                onChange={onSelect}
                >
                    {Object.keys(clothingTypes).map((type) => (
                        <MenuItem value={type}>{type}</MenuItem>
                    ))}
                </Select>
            </FormControl>            
        </Box>      
    );
}