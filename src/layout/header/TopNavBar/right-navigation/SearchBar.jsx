import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useTheme } from "../../../../providers/ThemeProvider";

const SearchBar = () => {
  const { isDark } = useTheme();
  const [bgColor, setBgColor] = useState("#e3f2fd");
  const [searchParams, setSearch] = useSearchParams();
  const handleChange = ({ target }) => setSearch({ q: target.value });

  useEffect(() => {
    if (isDark) {
      setBgColor("#333333");
    } else {
      setBgColor("#e3f2fd");
    }
  }, [isDark]);

  return (
    <Box display={"inline-flex"}>
      <FormControl variant="standard">
        <OutlinedInput
          sx={{ backgroundColor: bgColor }}
          placeholder="Search"
          size="small"
          value={searchParams.get("q") ?? ""}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};
export default SearchBar;
