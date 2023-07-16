import { arrayOf, bool, object, oneOfType, string } from "prop-types";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import normalizeName from "../helpers/crm/normalizeName";
import AddressAcordion from "./AddressAcordion";
import UserTypeSelect from "./UserTypeSelect";
import { Container } from "@mui/material";

const UsersFeedback = ({ isLoading, error, users, handleChangeUserType }) => {
  if (isLoading) return <Spinner />;
  if (error) {
    if (typeof error === "string") {
      return <Error errorMessage={error} />;
    } else {
      return <Error errorMessage={error.message} />;
    }
  }
  if (users && !users.length)
    return (
      <div>
        {" "}
        Oops, there are no users in the database that match the parameters you
        entered
      </div>
    );
  if (users)
    return (
      <Container sx={{ pb: 1 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="users table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Mail</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user._id}
                  </TableCell>
                  <TableCell align="left">{normalizeName(user.name)}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">{user.phone}</TableCell>
                  <TableCell align="left">
                    {<AddressAcordion address={user.address} />}
                  </TableCell>
                  <TableCell align="left">
                    {
                      <UserTypeSelect
                        isAdmin={user.isAdmin}
                        isBusiness={user.isBusiness}
                        userId={user._id}
                        userName={normalizeName(user.name)}
                        handleChangeUserType={handleChangeUserType}
                      />
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
};

UsersFeedback.propTypes = {
  isLoading: bool.isRequired,
  error: oneOfType([object, string]),
  users: arrayOf(object),
};

export default UsersFeedback;
