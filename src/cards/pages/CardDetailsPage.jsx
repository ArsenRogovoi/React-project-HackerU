import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Favorite } from "@mui/icons-material";

const CardDetailsPage = () => {
  const { id } = useParams();
  const { handleGetCard, card, error, isLoading } = useCards();

  useEffect(() => {
    handleGetCard(id);
  }, [id]);

  if (isLoading) return <Spinner />;

  if (error) return <Error />;

  if (card)
    return (
      <Container maxWidth={"lg"}>
        <PageHeader
          title="Business Details"
          subtitle="Here you can find more details about the business"
        />
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} sm={10} md={8}>
            <Card>
              <CardMedia
                sx={{ p: "5px", borderRadius: "10px" }}
                component="img"
                image={card.image.url}
              />
              <CardHeader title={card.title} subheader={card.subtitle} />
              <Divider />
              <CardContent>
                <Typography>
                  <Typography component="span" sx={{ fontWeight: "500" }}>
                    Description:
                  </Typography>
                  {" " + card.description}
                </Typography>
              </CardContent>

              <Divider />
              <CardContent>
                <Typography>
                  <Typography component="span" sx={{ fontWeight: "500" }}>
                    Phone:
                  </Typography>
                  {" " + card.phone}
                </Typography>
                <Typography>
                  <Typography component="span" sx={{ fontWeight: "500" }}>
                    E-mail:
                  </Typography>
                  {" " + card.email}
                </Typography>
                <Typography>
                  <Typography component="span" sx={{ fontWeight: "500" }}>
                    Website:
                  </Typography>
                  {" " + card.web}
                </Typography>
                <Divider sx={{ m: 1 }} />
                <Typography sx={{ fontWeight: "500" }}>Address:</Typography>
                <Typography>
                  {"House number and street:" +
                    " " +
                    card.address.houseNumber +
                    " " +
                    card.address.street}
                </Typography>
                <Typography>{"City: " + card.address.city}</Typography>
                <Typography>{"State: " + card.address.state}</Typography>
                <Typography>{"Zip: " + card.address.zip}</Typography>
                <Typography>{"Country: " + card.address.country}</Typography>
                <Divider sx={{ m: 1 }} />
                <Typography>
                  <Typography component="span" sx={{ fontWeight: "500" }}>
                    Card number:
                  </Typography>
                  {" " + card.bizNumber}
                </Typography>
              </CardContent>
              <Divider />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <Favorite color={"error"} />
                <Typography component={"span"}>{card.likes.length}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
};

export default CardDetailsPage;
