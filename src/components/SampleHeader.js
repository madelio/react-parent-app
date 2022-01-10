import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const SampleHeader = () => {
    return <AppBar position="static">
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            Sample Toolbar
        </Toolbar>
    </AppBar>
}

export default SampleHeader;