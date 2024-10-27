import { Container, Image } from "react-bootstrap";
import logo from "../assets/nba-logo.png";

const Header = () => {
  return (
    <Container>
      <Image src={logo} width={200}/>;
      <h1>NBA Legends</h1>
    </Container>
  );
};

export default Header;
