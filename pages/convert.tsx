import { NextPage } from "next";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/system/Container";
import SelectCurrency from "../components/SelectCurrency";

const ConverterPage: NextPage = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TextField id="currency-to" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <SelectCurrency></SelectCurrency>
        </Grid>
        <Grid item xs={6}>
          <TextField id="currency-from" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <SelectCurrency></SelectCurrency>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ConverterPage;
