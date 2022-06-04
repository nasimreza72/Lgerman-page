import { Carousel } from "react-bootstrap";
import articlePage from "../src/images/article-page.png";
import casePage from "../src/images/case-page.png";
import englishTranslationPage from "../src/images/en-en-page.png";
import germanTranslationPage from "../src/images/ge-en-page.png";
import listedWordPage from "../src/images/listed-word-page.png";
import loginPage from "../src/images/login-page.png";

export default function Home() {
  return (
    <div id="home">
      <div className="leftHomePart">
        <h2>
          Welcome to the{" "}
          <span style={{ fontSize: "40px", fontWeight: 400 }}>L</span>
          <span
            style={{ fontSize: "35px", fontStyle: "italic", fontWeight: 500 }}
          >
            ge
          </span>
          <span
            style={{
              color: "red",
              fontSize: 35,
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            rm
          </span>
          <span
            style={{
              color: "#f9b248",
              fontSize: 35,
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            an
          </span>{" "}
          page
          <div className="drawLine"></div>
        </h2>
        <div className="mainBelowPart">
          <h4>Are you struggling with your German?</h4>

          <h4>
            {" "}
            <span style={{ fontSize: "35px", fontWeight: 400 }}>L</span>
            <span
              style={{ fontSize: "25px", fontStyle: "italic", fontWeight: 500 }}
            >
              ge
            </span>
            <span
              style={{
                color: "red",
                fontSize: 25,
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              rm
            </span>
            <span
              style={{
                color: "#f9b248",
                fontSize: 25,
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              an
            </span>{" "}
            can help you :
          </h4>
          <ul>
            <li>learn basic german</li>
            <li>enhance your vocabulary</li>
            <li>translate from German to English</li>
            <li>improve your English vocabulary </li>
            <li>keep track of what you have learnt </li>
          </ul>
        </div>
      </div>
      <h4>Discover our Features </h4>

      <div className="rightHomePart">
        <Carousel variant="dark" >

        <Carousel.Item>
            <img className="d-block w-100" src={loginPage} alt="Login page" />
            <Carousel.Caption className="carouselCaption">
              <p>Login Page</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={articlePage} alt="Login page" />
            <Carousel.Caption className="carouselCaption">
              <p>Article Page</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={casePage} alt="Login page" />
            <Carousel.Caption className="carouselCaption">
              <p>Cases Page</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carouselItem">
            <img  src={englishTranslationPage} alt="Login page"
            />
            <Carousel.Caption className="carouselCaption">
            <p>English Translation Page</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={germanTranslationPage} alt="Login page"
            />
            <Carousel.Caption className="carouselCaption">
            <p>German Translation Page</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={listedWordPage} alt="Login page" />
            <Carousel.Caption className="carouselCaption">
              <p>Vocabulary Page</p>
            </Carousel.Caption>
          </Carousel.Item>

         

        </Carousel>
         



      </div>
    </div>
  );
}
