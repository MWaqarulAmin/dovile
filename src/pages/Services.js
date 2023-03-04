import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Services.css";
import servicesServices from "../images/servicesServices.png";
import graphicDesign from "../images/graphicDesign.png";
import testimonial from "../images/testimonial.png";
import consultation from "../images/consultation.png";

function Services() {
  return (
    <>
      {/* Services Section */}

      <section className="servicesSectionServices">
        <Container>
          <Row className="imageColumnServices">
            <Col sm={12} md={6} lg={6} className="textColumnServices">
              <div className="servicesContentServices">
                <h1>Services</h1>
                <p className="servicesTextServices">
                  From campaign planning and consultation to content creation
                  and extended social media campaigning, I'm here to help your
                  brand sound like you online.
                </p>
                <button className="servicesButtonServices">
                  First consultation is free
                </button>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="servicesImageServices">
                <img
                  src={servicesServices}
                  alt="services"
                  id="servicesImageServices"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Media Management Section */}

      <section className="socialMediaSectionServices">
        <Container>
          <Container>
            <h2 className="socialMediaSectionHeadingServices">
              Social Media Management
            </h2>

            <p id="socialMediaSectionDescriptionServices">
              Whether you need help with planning the right kinds of campaigns
              for your social media accounts or need to establish a general
              social media strategy in the first place, I'll work closely with
              you to identify how we can scale your social media activities to a
              whole new level.
            </p>
          </Container>

          <Row>
            <Container className="socialMediaSectionContainerServices socialMediaBoxServices">
              <Col sm={12} md={6} lg={6}>
                <h5>Services</h5>
                <p>
                  <ul>
                    <li>Audit of current social media activities</li>
                    <li>Hashtag and strategy research</li>{" "}
                    <li>Developing a personal strategy</li>{" "}
                    <li>
                      Content creation (including editing & social media
                      graphics)
                    </li>
                    <li>Publishing content on Instagram & Facebook</li>{" "}
                    <li>Community management</li>
                  </ul>
                </p>
              </Col>

              <Col sm={12} md={6} lg={6}>
                <h5>Add ons</h5>
                <p>
                  <ul>
                    <li>Daily engagement to grow your account</li>
                    <li>Facebook Group management</li>
                    <li>Blog post writing</li>
                    <li>Newsletter creation</li>
                    <li>Guide/Freebie creation</li>
                    <li>Graphic design</li>
                  </ul>
                </p>
              </Col>
            </Container>
          </Row>
          <Row>
            <Container className="socialMediaSectionContainerServices socialMediaBoxServices">
              <Col sm={12} md={6} lg={6}>
                <h5>Duration</h5>
                <p id="longText">
                  The initial contract is always for 3 months – this way, we can
                  monitor together that we achieve the desired results. After
                  the initial contract period, we continue on a monthly basis.
                </p>
              </Col>

              <Col sm={12} md={6} lg={6}>
                <h5>Pricing</h5>
                <p>
                  On request – the total price depends on your business and
                  needs.
                </p>
              </Col>
            </Container>
          </Row>
        </Container>
      </section>

      {/* Graphic Design Section */}

      <section className="graphicDesignSectionServices">
        <Container>
          <Container>
            <h2 className="graphicDesignSectionHeadingServices">
              Graphic design
            </h2>

            <p id="graphicDesignSectionDescriptionServices">
              It's true that a picture tells more than a thousand words – and on
              social media platforms like Instagram and Facebook, top graphics
              can make or break your content. In my work, I focus on creating
              visual assets that work cross-functionally across different
              platforms and communicate your brand in the best way possible.
            </p>
          </Container>

          <Row>
            <Container className="graphicDesignBoxServices">
              <Col sm={12} md={6} lg={6}>
                <h5>Service</h5>
                <p>
                  <ul>
                    <li>Social media graphic templates</li>
                    <li>Facebook ads design</li>
                    <li>Facebook covers and headers</li>
                    <li>Instagram story highlight icons</li>
                    <li> Instagram story stickers</li>
                    <li>Product cover</li>
                  </ul>
                </p>
              </Col>

              <Col sm={12} md={6} lg={6}>
                <h5>Duration</h5>
                <p>
                  The initial contract is always for 3 months – this way, we can
                  monitor together that we achieve the desired results. After
                  the initial contract period, we continue on a monthly basis.
                </p>
              </Col>
            </Container>
          </Row>
          <Row>
            <Container className="graphicDesignSectionContainerServices graphicDesignBoxServices">
              <Col sm={12} md={6} lg={6}>
                <h5>Pricing</h5>
                <p>
                  On request – the total price depends on your business and
                  needs.
                </p>
              </Col>
              <Container className="viewMoreButtonContainerServices">
                <button className="viewMoreButtonServices">View more</button>
              </Container>
            </Container>
          </Row>
          <Row className="graphicDesignImageContainerServices">
            <div class="graphicDesignImageContainerServices">
              {" "}
              <img src={graphicDesign} alt="images" />
              <img src={graphicDesign} alt="images" />
              <img src={graphicDesign} alt="images" />
            </div>
          </Row>
        </Container>
      </section>
      {/* Testimonial Section */}
      <section className="testimonialSectionServices">
        <Container>
          <Row className="testimonialImageColumnServices">
            <Col sm={12} md={6} lg={6}>
              <div className="testimonialImageServices">
                <Image
                  src={testimonial}
                  alt="testimonial"
                  id="testimonialImageServices"
                />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} className="textColumnServices">
              <div className="testimonialContentServices Container">
                <p className="testimonialTextServices">
                  ”We went from having zero online presence to dominating our
                  niche on Google. As a technophobe I never thought we could do
                  it, but currently social media amounts for the majority of our
                  sales.”
                </p>
                <p>
                  <strong id="testimonialNameServices">Nicollas Ductorn</strong>
                  <br />
                  <em id="testimonialPostServices">
                    Director of Corporate MarketingForge Inc.
                  </em>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Consultation Section */}
      <section className="consultationSectionServices">
        <Container>
          <Row className="consultationSectionRowServices">
            <Col sm={12} md={6} lg={6}>
              <div className="consultationContentServices">
                <h2>First consultation for free</h2>
                <div className="descriptionServices">
                  <p>
                    People don't buy goods and services. They buy solutions and
                    stories that you tell.
                  </p>
                </div>
                <button className="getYoursButtonServices">Get yours</button>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="consultationImageServices">
                <Image
                  src={consultation}
                  alt="consultation pic"
                  className="consultationPicServices"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Services;
