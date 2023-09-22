import { Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Add } from "@mui/icons-material";
function Mui() {
  return (
    <div>
      <Button variant="text" size="small" color="inherit">
        Text
      </Button>
      <Button startIcon={<SearchIcon />} variant="contained" color="success">
        Search for places
      </Button>
      <Button startIcon={<Add />} variant="contained" color="inherit">
        Add next
      </Button>
      <Button variant="outlined">Outlined</Button>

        <Typography variant="h1" component="">
            it uses h1 style but its a p tag
        </Typography>

    </div>
  );
}

export default Mui;
