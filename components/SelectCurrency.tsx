import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useEffect, useState } from "react";

function SelectCurrency() {
  const [currency, setCurrency] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
  };

  const [selectCurrencies, setSelectCurrencies] = useState([]);

  useEffect(() => {
    fetch("https://api.frankfurter.app/currencies")
      .then((res) => res.json())
      .then((data) => setSelectCurrencies(data));
  }, []);

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Currency</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={currency}
        onChange={handleChange}
        label="Currency"
      >
        <MenuItem value="AUD">Australian Dollar</MenuItem>
        <MenuItem value="BGN">Bulgarian Lev</MenuItem>
        <MenuItem value="BRL">Brazilian Real</MenuItem>
        <MenuItem value="CAD">Canadian Dollar</MenuItem>
        <MenuItem value="CHF">Swiss Franc</MenuItem>
        <MenuItem value="CNY">Chinese Renminbi Yuan</MenuItem>
        <MenuItem value="CZK">Czech Koruna</MenuItem>
        <MenuItem value="DKK">Danish Krone</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectCurrency;
