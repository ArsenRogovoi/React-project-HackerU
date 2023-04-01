import { Container, Grid } from "@mui/material";
import PageHeader from "../components/PageHeader";

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ color: "skyblue" }}>
      <PageHeader
        title="About page"
        subtitle="On this page you can find explanations
        about using the application"
      />

      <Grid container spacing={0}>
        <Grid item xs={12} md={8} alignSelf="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
          impedit quaerat illo nostrum error fugit earum illum, architecto
          expedita, quam voluptates debitis quo? Quis voluptates omnis
          consequuntur natus, cum consectetur! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Magni impedit quaerat illo nostrum error
          fugit earum illum, architecto expedita, quam voluptates debitis quo?
          Quis voluptates omnis consequuntur natus, cum consectetur! Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Magni impedit quaerat
          illo nostrum error fugit earum illum, architecto expedita, quam
          voluptates debitis quo? Quis voluptates omnis consequuntur natus, cum
          consectetur! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Magni impedit quaerat illo nostrum error fugit earum illum, architecto
          expedita, quam voluptates debitis quo? Quis voluptates omnis
          consequuntur natus, cum consectetur! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Magni impedit quaerat illo nostrum error
          fugit earum illum, architecto expedita, quam voluptates debitis quo?
          Quis voluptates omnis consequuntur natus, cum consectetur! Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Magni impedit quaerat
          illo nostrum error fugit earum illum, architecto expedita, quam
          voluptates debitis quo? Quis voluptates omnis consequuntur natus, cum
          consectetur!
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
