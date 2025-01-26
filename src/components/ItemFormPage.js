import { 
    Autocomplete, 
    TextField, 
    FormControl, 
    InputLabel,
    Select,
    MenuItem,
    Stack
} from "@mui/material";
import { Type, Gender, Size, Condition } from "./constants/const";

export default function ItemFormPage() {
    return(
        <Stack 
            spacing={2} 
            fullWidth 
            pt='2%'
            pr='5%'
            pl='5%'
        >
            <Autocomplete 
                disablePortal
                options={Object.values(Type)}
                value={''}
                renderInput={(params) => <TextField {...params} label="Clothing Type" />}
            />
            <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
                <Select
                    labelId='gender-select-field'
                    label="Gender"
                    value={''}
                >
                    {Object.keys(Gender).map((genderType) => (
                            <MenuItem value={genderType} key={genderType}>{Gender[genderType]}</MenuItem>
                    ))}               
                </Select>
            </FormControl>
            <FormControl fullWidth>
            <InputLabel>Size</InputLabel>
                <Select
                    labelId='size-select-field'
                    label="Size"
                    value={''}
                >
                    {Object.keys(Size).map((sizes) => (
                            <MenuItem value={sizes} key={sizes}>{Size[sizes]}</MenuItem>
                    ))}               
                </Select>
            </FormControl>
            <FormControl fullWidth>
            <InputLabel>Condition</InputLabel>
                <Select
                    labelId='condition-select-field'
                    label="condition"
                    value={''}
                >
                    {Object.keys(Condition).map((conditionLevel) => (
                            <MenuItem value={conditionLevel} key={conditionLevel}>{Condition[conditionLevel]}</MenuItem>
                    ))}               
                </Select>
            </FormControl>
            <TextField id="brand-text-field" label="Brand" variant="outlined" />
            <TextField id="color-text-field" label="Color" variant="outlined" />
        </Stack>
    );
}