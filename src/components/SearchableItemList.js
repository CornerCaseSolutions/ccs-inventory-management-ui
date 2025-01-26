import SearchableItem from "./SearchableItem";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function SearchableItemList({ clothingList, onRemoveItem }) {
    return(
        <div>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {clothingList.map((item) => (
                        <SearchableItem key={item.id} item={item} onRemoveItem={onRemoveItem}/>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}