import { Container, Grid, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="About page"
        subtitle="On this page you can find explanations
        about using the application"
      />

      <Grid container spacing={0}>
        <Grid item xs={12} md={8} alignSelf="center">
          <Typography fontSize={24} gutterBottom>
            Wellcome to our BCard application! Here you can find lots of
            services that companies shares. You can use Searchbar to find
            business you want and see it details and contacts. If you want to
            save your favorite cards sign in and enjoy our app.
          </Typography>
          <Typography fontSize={24}>
            If you are business that want to share your services in our
            application sign in as business user and you will able to create,
            edit and delete your business cards.
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
          }}
        >
          <img alt="card" src="/assets/images/about.png" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
