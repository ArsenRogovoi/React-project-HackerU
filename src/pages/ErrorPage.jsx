import { Button, Container, Grid, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";

const ErrorPage = () => {
  return (
    <Container>
      <PageHeader title="Error 404" subtitle="Page not found" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" color={"initial"}>
            Oops... The requested URL was not found in this server
          </Typography>
          <Button variant="text" color="primary">
            Click here to return to the home page...
          </Button>
        </Grid>
        <Grid item xs={12} md={4} justifyContent={"center"}>
          <img
            width={"100%"}
            alt="broken robot"
            src="/assets/images/broken-robot.jpg"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ErrorPage;
