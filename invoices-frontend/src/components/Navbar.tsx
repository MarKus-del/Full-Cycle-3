import { Button, Toolbar, Typography } from "@material-ui/core"
import { AppBar } from "@material-ui/core"
import StoreIcon from "@material-ui/icons/store"
import Link from "next/link"

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href={"/"} as={'/'} passHref>
          <Button color="inherit" startIcon={<StoreIcon />} component="a">
            <Typography variant="h6" >Code Store</Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;