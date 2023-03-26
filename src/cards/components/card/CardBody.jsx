import { CardContent, CardHeader, Divider, Typography } from "@mui/material";

const CardBody = ({ card }) => {
  const {
    title,
    subtitle,
    phone,
    address: { street, houseNumber, city, country },
    bizNumber,
  } = card;
  return (
    <>
      {/* headings */}
      <CardHeader sx={{ m: 1, p: 0 }} title={title} subheader={subtitle} />
      <Divider />
      {/* Content */}
      <CardContent sx={{ m: 1, padding: 0 }}>
        <Typography>
          <Typography component="span" sx={{ fontWeight: "500" }}>
            Phone:
          </Typography>
          {" " + phone}
        </Typography>
        <Typography>
          <Typography component="span" sx={{ fontWeight: "500" }}>
            Address:
          </Typography>
          {" " + street + " " + houseNumber + ", " + city + ", " + country}
        </Typography>
        <Typography>
          <Typography component="span" sx={{ fontWeight: "500" }}>
            Card number:
          </Typography>
          {" " + bizNumber}
        </Typography>
      </CardContent>
    </>
  );
};

export default CardBody;
