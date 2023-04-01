import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const MuiBottomNavigators = () => {
  return (
    <div style={{ marginTop: 8 }}>
      <div>
        dfakj hah fhakjdhfjkahdf haf hfkjadshf hasdlh lahfhs h dajfhlshflka
        fkjahdflkajhf asjlkdfhaf fhsjdahf fajdhfkasf dfasjkflkajhfa dsjkfhalkhf
        dsshafklhalkf
      </div>

      <Paper sx={{ position: "sticky" }} elevation={4}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
          <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
          <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default MuiBottomNavigators;
