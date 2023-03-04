import "./Featured.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import laniHaw from "../images/laniHaw.svg";
import deonFive from "../images/deonFive.svg";
import knoxemus from "../images/knoxemus.svg";

function Featured() {
  return (
    <section className="featuredSection">
      <Container>
        <Row>
          <Col sm={12}>
            <div>
              <h5>Featured</h5>

              <img src={laniHaw} alt="laniHaw logo" className="featuredImage" />
              <img
                src={deonFive}
                alt="deonFive logo"
                className="featuredImage"
              />
              <img
                src={knoxemus}
                alt="knoxemus logo"
                className="featuredImage"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Featured;
