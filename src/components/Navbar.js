import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import StarWarLogo from "./starwarlogo.png"; // Replace the path with the actual image file
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: 'sticky', background: '#3B3F5C', top: 0, justifyContent: 'space-between' }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={StarWarLogo} alt="logo" height={45} />
      </Link>
      
      <SearchBar/>
      </Stack>
      
  );
};

export default Navbar;
