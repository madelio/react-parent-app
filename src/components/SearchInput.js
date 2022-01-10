import { TextField, Button, Box } from '@mui/material';
import { useState } from 'react';

const SearchInput = () => {
    const [searchValue, setSearchValue] = useState("");
    const sendSearchParameters = () => {
        alert(searchValue);
    }

    return <Box sx={{p :2}}>
      <TextField 
        value={searchValue} 
        onChangeCapture={(e) => {
            setSearchValue(e.target.value);
        }}
        />
      <Button onClick={sendSearchParameters}>Submit</Button>
    </Box>
}

export default SearchInput;