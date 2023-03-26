import { Container, Grid, Typography } from "@mui/material";
import BusinessCard from "./card/Card";

const BusinessCards = () => {
  const cards = [
    {
      _id: "139221ec70962dd4df2b709b",
      title: "Business Name",
      subtitle: "Business Headline",
      description: "some desc",
      phone: "0500000000",
      email: "admin@gmail.com",
      web: "https://www.hackampus.com",
      image: {
        url: "https://cdn.pixabay.com/photo/2019/12/18/19/22/christmas-4704706_960_720.jpg",
        alt: "Wowww this is Apple Watch",
        _id: "639221ec70962dd4df2b709c",
      },
      address: {
        state: "israel",
        country: "israel",
        city: "Tel Aviv",
        street: "STREET",
        houseNumber: 1,
        zip: 123456,
        _id: "639221ec70962dd4df2b709d",
      },
      bizNumber: 6480165,
      createdAt: "2022-12-08T17:42:04.379Z",
      user_id: "638503e4caa1f3d9dbbcf7bc",
      likes: ["639221ec70962dd4df2b70a3"],
      __v: 0,
    },
    {
      _id: "239221ec70962dd4df2b709b2",
      title: "Tesla",
      subtitle: "Car Company",
      description: "Innovative Car Company",
      phone: "0500000000",
      email: "admin@gmail.com",
      web: "https://www.hackampus.com",
      image: {
        url: "https://cdn.pixabay.com/photo/2022/08/25/00/32/tesla-logo-7408969_960_720.png",
        alt: "Wowww this is Apple Watch",
        _id: "639221ec70962dd4df2b709c",
      },
      address: {
        state: "israel",
        country: "israel",
        city: "Tel Aviv",
        street: "STREET",
        houseNumber: 1,
        zip: 123456,
        _id: "639221ec70962dd4df2b709d",
      },
      bizNumber: 6480166,
      createdAt: "2022-12-08T17:42:04.379Z",
      user_id: "638503e4caa1f3d9dbbcf7bc",
      likes: ["639221ec70962dd4df2b70a3"],
      __v: 0,
    },
    {
      _id: "339221ec70962dd4df2b709b",
      title: "Business Name",
      subtitle: "Business Headline",
      description: "some desc",
      phone: "0500000000",
      email: "admin@gmail.com",
      web: "https://www.hackampus.com",
      image: {
        url: "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_960_720.jpg",
        alt: "Wowww this is Apple Watch",
        _id: "639221ec70962dd4df2b709c",
      },
      address: {
        state: "israel",
        country: "israel",
        city: "Tel Aviv",
        street: "STREET",
        houseNumber: 1,
        zip: 123456,
        _id: "639221ec70962dd4df2b709d",
      },
      bizNumber: 6480167,
      createdAt: "2022-12-08T17:42:04.379Z",
      user_id: "638503e4caa1f3d9dbbcf7bc",
      likes: ["639221ec70962dd4df2b70a3"],
      __v: 0,
    },
  ];

  const handleCardDelete = (_id) => {
    console.log("You deleted card no. " + _id);
  };

  const handleCardLike = (_id) => {
    console.log("You likeed card no. " + _id);
  };

  const handleCardEdit = (_id) => {
    console.log("You edited card no. " + _id);
  };

  const events = {
    onDelete: handleCardDelete,
    onLike: handleCardLike,
    onEdit: handleCardEdit,
  };

  if (!cards.length) {
    return (
      <Container>
        <Grid container justifyContent={"space-evenly"}>
          <Typography color="skyblue">
            Oops... it seems there are no business cards to display
          </Typography>
        </Grid>
      </Container>
    );
  } else {
    return (
      <Container>
        <Grid container justifyContent={"space-evenly"}>
          {cards.map((card, index) => {
            return (
              <Grid item key={card._id + index}>
                <BusinessCard
                  events={events}
                  card={card}
                  key={card._id + index}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
};

export default BusinessCards;
