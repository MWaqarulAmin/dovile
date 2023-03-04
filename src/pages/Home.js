import "./Home.css";
import blog from "../images/blog.png";
import Featured from "../components/Featured.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import banner from "../images/banner.png";
import services from "../images/services.png";
import testimonial from "../images/testimonial.png";

function Home() {
  return (
    <>
      {/* Hello Section */}
      <section className="helloSectionHome">
        <Container>
          <Row className="helloSectionRowHome">
            <Col sm={12} md={6} lg={6}>
              <div className="helloContentHome">
                <h1>
                  Hello, so good to
                  <br />
                  see you!
                </h1>
                <div>
                  <p className="descriptionHome">
                    I help small and medium-sized businesses grow their audience
                    and brand recognition through social media.
                  </p>
                </div>
                <button className="contactButtonHome">Contact me</button>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="helloImageHome">
                <Image
                  src={banner}
                  alt="banner pic"
                  className="bannerPicHome"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Featured Section */}
      <Featured />
      {/* Name Section */}
      <section className="nameSectionHome">
        <Container>
          <h2>My name is Dovile</h2>
          <Container className="introductionHome">
            <p>
              I'm your new social media bestie. My mission is to help small and
              medium-sized businesses grow their audience and brand recognition
              through social media. To do that, I believe it's paramount to
              create a committed and genuine community that has a positive
              influence on people’s lives beyond the online sphere. My goal is
              to help you understand the power of social media and create
              connections that go beyond the internet.
            </p>
          </Container>
        </Container>
      </section>
      {/* Services Section */}
      <section className="servicesSectionHome">
        <Container className="containerServicesHome">
          <Row className="imageColumnHome">
            <Col sm={12} md={6} lg={6}>
              <div className="servicesImageHome">
                <img src={services} alt="services" id="servicesImageHome" />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} className="textColumnHome">
              <div className="servicesContentHome">
                <h1>Services</h1>
                <p className="servicesTextHome">
                  From campaign planning and consultation to content creation
                  and extended social media campaigning, I'm here to help your
                  brand sound like you online.
                </p>
                <button className="servicesButtonHome">Read more</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Questions Section */}

      <section class="questionsSectionHome FlexContainer">
        <Container className="questionsSectionHeadingHome">
          <h2>Are you ready to...</h2>
        </Container>

        <div className="questionsBoxHome">
          {" "}
          <h6>Create content that's visually pleasing?</h6>
          <p>
            It's not enough to just create an account and post something. Your
            content needs to represents your brand and showcase your mission and
            values. And you want to do it in a way that stops the user in their
            tracks – with beautiful content.
          </p>
        </div>
        <div className="questionsBoxHome">
          <h6>Grow your brand and turn your audience into paying clients?</h6>
          <p>
            Selling online is different from traditional sales channels. But
            most of all, you need to gain your audience's trust if you want them
            to part with their dollar.
          </p>
        </div>
        <div className="questionsBoxHome">
          <h6>Get hold of your dream clients online?</h6>
          <p>
            Everybody is online, so why shouldn't you try to reach out to them?
            With a bigger reach than ever before, the world really is your
            oyster when it comes to selling online.
          </p>
        </div>
        <div className="questionsBoxHome">
          <h6>
            Invest in your brand and take your business to the next level?
          </h6>
          <p>
            Social media marketing is much more than simply posting about an
            upcoming sale. With the right approach, you can exponentially grow
            your bottom line.
          </p>
        </div>
      </section>

      {/* My Blog Section */}

      <section className="blogSectionHome">
        <Container>
          <Row className="blogSectionRowHome">
            <Col sm={12} md={6} lg={6}>
              <div className="blogContentHome">
                <h1>My blog</h1>
                <div className="blogDescriptionHome">
                  <p>
                    I'll let you in on some trade secrets and share my top tips
                    on how to successfully promote your brand online.
                  </p>
                </div>
                <button className="readButtonHome">Read Blog</button>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="blogImageHome">
                <img src={blog} alt="blog pic" className="blogPicHome" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className="testimonialSectionHome">
        <Container>
          <Row className="testimonialImageColumnHome">
            <Col sm={12} md={6} lg={6}>
              <div className="testimonialImageHome">
                <Image
                  src={testimonial}
                  alt="testimonial"
                  id="testimonialImageHome"
                />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} className="textColumnHome">
              <div className="testimonialContentHome Container">
                <p className="testimonialTextHome">
                  ”We went from having zero online presence to dominating our
                  niche on Google. As a technophobe I never thought we could do
                  it, but currently social media amounts for the majority of our
                  sales.”
                </p>
                <p>
                  <strong id="testimonialNameHome">Nicollas Ductorn</strong>
                  <br />
                  <em id="testimonialPostHome">
                    Director of Corporate MarketingForge Inc.
                  </em>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
