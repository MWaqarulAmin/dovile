import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import blogColors from "../images/blogColors.png";
import "./Blog.css";

function Blog() {
  return (
    <>
      <Container className="blogSectionBlog">
        <Row>
          <Col sm="12" md="6" lg="6">
            <div className="div1Blog">
              <div className="imageContainerBlog">
                <Image
                  src={blogColors}
                  alt="colors pic"
                  className="imageBlog"
                ></Image>
              </div>
              <div className="content">
                <h3 className="blogh3Blog">
                  10 Ways to Improve Your Digital Marketing Strategy
                </h3>
                <p className="blogpBlog">
                  Tired of not having a clear direction for your online
                  marketing activities? It's easy to regain focus and structure
                  with our 10 tips.
                </p>
                <div>
                  <p>11/16/2021 . 1 min read</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12" md="6" lg="6">
            <div className="div2Blog">
              <div className="imageContainerBlog">
                <Image
                  src={blogColors}
                  alt="colors pic"
                  className="imageBlog"
                ></Image>
              </div>
              <div className="content">
                <h3 className="blogh3Blog">
                  How I Built My Insta: A Lesson of Athenticity
                </h3>
                <p className="blogpBlog">
                  While you might think that Instagram is only a visual
                  platform, it's more a place for storytelling and authentic
                  branding. Here's my story.
                </p>
                <div>
                  <p>11/16/2021 . 1 min read</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blog;
