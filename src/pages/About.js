import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import about from "../images/about.png";
import "./About.css";
import Featured from "../components/Featured";
import blog from "../images/blog.png";

function About() {
  return (
    <>
      {/* About Section */}
      <section className="aboutSectionAbout">
        <Container>
          <Row className="aboutSectionRowAbout">
            <Col sm={12} md={6} lg={6}>
              <div className="aboutContentAbout">
                <h2>So, who am I?</h2>
                <div className="descriptionAbout">
                  <p>
                    I'm your new social media bestie. My mission is to help
                    small and medium-sized businesses grow their audience and
                    brand recognition through social media. My goal is to help
                    you understand the power of social media and create
                    connections that go beyond the internet.
                  </p>
                </div>
                <button className="contactButtonAbout">Contact me</button>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="aboutImageAbout">
                <Image src={about} alt="about pic" className="aboutPicAbout" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Featured Section */}
      <Featured />
      {/* Changing Section */}
      <section className="changingSectionAbout">
        <Container>
          <h2>Changing the digital world</h2>
          <Container className="introductionAbout">
            <p>
              I believe it's paramount to create a committed and genuine
              community that has a positive influence on people’s lives beyond
              the online sphere. With more people online than ever before, the
              competition for attention is fierce, and you have to work hard to
              appeal to the masses. That's why it's my goal to help you
              understand the power of social media and create connections that
              go beyond the internet.
            </p>
          </Container>
        </Container>
      </section>

      {/* Blog Section */}

      <section className="blogSectionAbout">
        <Container>
          <Row className="imageColumnAbout">
            <Col sm={12} md={6} lg={6}>
              <div className="blogImageAbout">
                <img src={blog} alt="blog" id="blogImageAbout" />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} className="textColumnAbout">
              <div className="blogContentAbout">
                <h1>My blog</h1>
                <p className="blogTextAbout">
                  I'll let you in on some trade secrets and share my top tips on
                  how to successfully promote your brand online.
                </p>
                <button className="blogButtonAbout">Read blog</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
