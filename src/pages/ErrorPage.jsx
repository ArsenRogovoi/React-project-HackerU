import { Container, Grid, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import NavItem from "../routes/NavItem";
import ROUTES from "../routes/routesModel";

const ErrorPage = () => {
  return (
    <Container>
      <PageHeader title="Error 404" subtitle="Page not found" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" color={"initial"}>
            Oops... The requested URL was not found in this server
          </Typography>
          <NavItem
            to={ROUTES.CARDS}
            label="Click here to return to the home page..."
            color={"#1976d2"}
          />
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
