import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AddressAcordion = ({ address }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{`${address.country}`}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Typography component="span" sx={{ fontWeight: "500" }}>
            House number and street:
          </Typography>
          {`${address.houseNumber} ${address.street}`}
        </Typography>
        <Typography>
          <Typography component="span" sx={{ fontWeight: "500" }}>
            City:
          </Typography>
          {`${address.city}`}
        </Typography>
        {address.state && (
          <Typography>
            <Typography component="span" sx={{ fontWeight: "500" }}>
              State:
            </Typography>
            {`${address.state}`}
          </Typography>
        )}
        <Typography>
          <Typography component="span" sx={{ fontWeight: "500" }}>
            Zip:
          </Typography>
          {`${address.zip}`}
        </Typography>
        <Typography>
          <Typography component="span" sx={{ fontWeight: "500" }}>
            Country:
          </Typography>
          {`${address.country}`}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
export default AddressAcordion;
