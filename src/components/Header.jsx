import { AppBar, Toolbar, Typography } from "@mui/material";
import "../components/header.css"

function Header() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <AppBar position="static">
        <Toolbar className="gf">
          <Typography variant="h1" component="span">
            Список дел
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
