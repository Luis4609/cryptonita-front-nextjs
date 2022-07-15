import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";

export default function UploadButtons() {
  return (
    <Container>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        {/* <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton> */}
      </Stack>
    </Container>
  );
}
