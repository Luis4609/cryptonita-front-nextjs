import { Typography, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import { ReactElement } from "react";

import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/sidebar";

export default function UploadButtons() {
  return (
    <Container sx={{ margin: 5 }}>
      <Typography variant="h3">Upload your files here</Typography>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Stack>
    </Container>
  );
}

UploadButtons.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
