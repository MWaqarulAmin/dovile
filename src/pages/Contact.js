import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import contactPic from "../images/contactPic.png";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contactSectionContact">
        <Container>
          <Row className="contactSectionRowContact">
            <Col sm={12} md={6} lg={6}>
              <div className="heading">
                <h1>Leave me a message</h1>
              </div>
              <div className="contactContentContact">
                <Container className="formDivContact">
                  <form id="formContact">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Your name" />
                    <label>Your email*</label>
                    <input
                      type="email"
                      name="mail"
                      placeholder="Your email address"
                    />
                    <label for="message">Message*</label>
                    <textarea
                      id="messageContact"
                      name="message"
                      placeholder="Enter your message"
                      Style="height:100px"
                    ></textarea>
                  </form>
                </Container>
                <button className="contactButtonContact">Submit</button>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="contactImageContact">
                <Image
                  src={contactPic}
                  alt="contact pic"
                  className="contactPicContact"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
