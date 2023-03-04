import "./Footer.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import footer1 from "../images/footer1.png";
import footer2 from "../images/footer2.png";
import footer3 from "../images/footer3.png";
import footer4 from "../images/footer4.png";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";

function Footer() {
  return (
    <section className="section">
      <Container className="footerSection ">
        <Image src={footer1} id="image" />
        <Image src={footer2} id="image" />
        <Image src={footer3} id="image" />
        <Image src={footer4} id="image" />
      </Container>
      <div className="content">
        <Container className="footerIconsContainer">
          <Image src={twitter} className="footerIcons" />
          <Image src={facebook} className="footerIcons" />
          <Image src={instagram} className="footerIcons" />
        </Container>

        <Container className="footerLinksContainer">
          <p>
            <a href="Terms of Service" className="footerLinks">
              © 2023 M. Waqar ul Amin.
            </a>
          </p>
        </Container>
      </div>
    </section>
  );
}

export default Footer;
