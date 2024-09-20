import React from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

const App = () => {
  const categoryArr = [
    {
      image: "main_dish.png",
      title: "Main Dish",
      dishes: "86 dishes",
    },
    {
      image: "break_fast.png",
      title: "Breakfast",
      dishes: "12 break fast",
    },
    {
      image: "dessert.png",
      title: "Dessert",
      dishes: "48 dessert",
    },
    {
      image: "browse_all.png",
      title: "Browse All",
      dishes: "255 Items",
    },
  ];

  const dishes = [
    {
      name: "Fattoush salad",
      description: "Description of the item",
      price: "$24.00",
      rating: 4.9,
      image: "fattoush_salad.png",
    },
    {
      name: "Vegetable salad",
      description: "Description of the item",
      price: "$26.00",
      rating: 4.6,
      image: "vegetable_salad.png",
    },
    {
      name: "Egg vegi salad",
      description: "Description of the item",
      price: "$23.00",
      rating: 4.5,
      image: "egg_salad.png",
    },
  ];

  const servicesArr = [
    {
      name: "Catering",
      description: "Delight your guests with our flavors and  presentation",
      image: "fi-rr-salad.png",
    },
    {
      name: "Fast delivery",
      description: "We deliver your order promptly to your door",
      image: "fi-rr-time-fast.png",
    },
    {
      name: "Online Ordering",
      description: "Explore menu & order with ease using our Online Ordering ",
      image: "fi-rr-shopping-cart-check.png",
    },
    {
      name: "Gift Cards",
      description: "Give the gift of exceptional dining with Foodi Gift Cards",
      image: "fi-rr-gift.png",
    },
  ];
  return (
    <>
      {/* Header with Navigation */}
      <Navbar expand="lg" variant="light" className="py-3">
        <Container>
          <Navbar.Brand href="#home">
            <img src="logo.png" alt="Logo" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                href="#home"
                style={{ color: "#39DB4A", margin: "10px" }}
              >
                Home
              </Nav.Link>
              <Nav.Link href="#menu" style={{ margin: "10px" }}>
                Menu <img alt="" src="arrow.png" style={{ width: "10px" }} />
              </Nav.Link>
              <Nav.Link href="#services" style={{ margin: "10px" }}>
                Services{" "}
                <img
                  alt=""
                  src="arrow.png"
                  style={{ width: "10px", margin: "10px" }}
                />
              </Nav.Link>
              <Nav.Link href="#offers" style={{ margin: "10px" }}>
                Offers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div>
            <img alt="" src="Vector.png" />
            <img alt="" src="bag.png" style={{ marginLeft: "40px" }} />
            <Button
              style={{ marginLeft: "40px" }}
              variant="success"
              className="explore-btn"
            >
              <img alt="" src="call.png" /> Contact
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section py-1">
        <Container>
          <Row>
            <Col className="my-auto hero-column">
              <h1 className="display-4 fw-bolder">
                Dive into Delights Of Delectable
                <span className="highlight">Food</span>
              </h1>
              <p>
                Where Each Plate Weaves a Story of Culinary Mastery and
                Passionate Craftsmanship
              </p>
              <Button variant="success" className="order-now-btn">
                Order Now
              </Button>
              <Button variant="text-secondary" className="watch-video-btn">
                Watch Video
              </Button>
              <Button variant="text-secondary" className="watch-icon-btn">
                <img
                  alt=""
                  src="Polygon.png"
                  style={{ width: "15px", paddingBottom: "4px" }}
                />
              </Button>
            </Col>
            <Col md={6}>
              <img
                src="hero-image.png"
                alt="Delicious Food"
                className="img-fluid"
                style={{ maxWidth: "90%" }}
              />
            </Col>
          </Row>
          {/* <Row className="mt-4">
            <Col md={6}>
              <Card className="product-card">
                <Card.Img variant="top" src="spicy-noodles-url" />
                <Card.Body>
                  <Card.Title>Spicy Noodles</Card.Title>
                  <Card.Text>$18.00</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="product-card">
                <Card.Img variant="top" src="vegetarian-salad-url" />
                <Card.Body>
                  <Card.Title>Vegetarian Salad</Card.Title>
                  <Card.Text>$23.00</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
        </Container>
      </section>

      {/* Popular Categories Section */}
      <section className="categories-section text-center py-5">
        <Container className="d-flex flex-column">
          <h5>Customer Favorites</h5>
          <h1>Popular Categories</h1>
          <Row className="mt-4 w-100">
            {categoryArr.map((item, index) => (
              <Col md={3} xs={6}>
                <div className="category-card">
                  <img
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                    src={item.image}
                  />
                  <div>
                    <h5>{item.title}</h5>
                    <h6>({item.dishes})</h6>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Special Dishes Section */}
      <Container>
        <div className="special-dishes-container">
          <div className="d-flex flex-column mb-12">
            <h3>Special Dishes</h3>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <h1 className="fw-bolder">Standout Dishes From Our Menu</h1>
              <div className="d-flex">
                <Button variant="text-secondary" className="left-arrow-btn">
                  <img alt="" src="left-arrow.png" />
                </Button>
                <Button variant="text-secondary" className="right-arrow-btn">
                  <img alt="" src="right-arrow.png" />
                </Button>
              </div>
            </div>
          </div>
          <div className="dishes-grid">
            {dishes.map((dish, index) => (
              //   <Col md={3} xs={6}>
              <div key={index} className="dish-card">
                <div className="dish-card-content">
                  <div className="dish-image-container">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="dish-image"
                    />
                  </div>
                  <h3 className="dish-name">{dish.name}</h3>
                  <p className="dish-description">{dish.description}</p>
                  <div className="price-rating">
                    <p className="dish-price">{dish.price}</p>
                    <div className="dish-rating">
                      <span>⭐</span>
                      <span>{dish.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              //   </Col>
            ))}
          </div>
        </div>
      </Container>

      <Container>
        <div className="testimonial-container">
          <div className="testimonial-left">
            <img src="chef_img.png" alt="Chef" className="chef-image" />
          </div>
          <div className="testimonial-right">
            <h6>TESTIMONIALS</h6>
            <h1>What Our Customers Say About Us</h1>
            <p>
              “I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable.”
            </p>
            <div className="customer-feedback">
              <div className="avatars">
                <img src="mask_1.png" alt="avatar1" />
                <img src="mask_2.png" alt="avatar2" />
                <img src="mask_3.png" alt="avatar3" />
              </div>
              <div className="feedback-rating">
                <h6>Customer Feedback</h6>
                <div className="d-flex">
                  <span className="emoji">⭐</span>
                  <span>4.9</span>
                  <span className="review">(18.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Our Story & Services Section */}
      <section className="story-services-section py-5">
        <Container>
          <Row>
            <Col md={5}>
              <h3>Our Story & Services</h3>
              <h1 className="fw-bolder">Our Culinary Journey And Services</h1>
              <p>
                Rooted in passion, we create unforgettable dining experiences
                with our exceptional services. Enjoy our dishes crafted with
                artistry and warm hospitality.
              </p>
              <Button variant="success" className="explore-btn">
                Explore
              </Button>
            </Col>
            <Col md={7} className="d-flex justify-content-center">
              <div className="w-75">
                <Row>
                  {servicesArr.map((item, index) => (
                    <Col md={6} xs={12}>
                      <div className="service-card">
                        <img
                          alt={`service_card_${index}`}
                          style={{ width: "64px", height: "64px" }}
                          src={item.image}
                        />
                        <div style={{ marginTop: "12px" }}>
                          <h5>{item.name}</h5>
                          <h6>({item.description})</h6>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer Section */}
      <footer className="footer-section py-4">
        <Container className="d-flex flex-column">
          <Row className="w-100">
            <Col md={3}>
              <img
                style={{ marginBottom: 25 }}
                src="logo.png"
                alt="Logo"
                className="img-fluid"
              />
              <p
                style={{
                  fontFamily: "Inter",
                  fontFize: "24px",
                  fontWeight: "500",
                  lineHeight: "36.13px",
                  textAlign: "left",
                  width: "300px",
                  color: "#555555",
                }}
              >
                Savor the artistry where <br /> every dish is a culinary <br />{" "}
                masterpiece
              </p>
            </Col>
            <Col md={3}>
              <h5>Useful Links</h5>
              <ul>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#services">Events</a>
                </li>
                <li>
                  <a href="#offers">Block</a>
                </li>
                <li>
                  <a href="#offers">FAQ</a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Main Menu</h5>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#offers">Offers</a>
                </li>
                <li>
                  <a href="#menu">Menus</a>
                </li>
                <li>
                  <a href="#reservation">Reservation</a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Contact Us</h5>
              <p>Email: example@mail.com</p>
              <p>Phone: +123 456 789</p>
              <p>Social media links</p>
            </Col>
          </Row>
          <Row
            className="mt-3 w-100"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Col md={4}>
              <img
                alt=""
                src="facebook.png"
                style={{ width: "48px", marginRight: "12px" }}
              />
              <img
                alt=""
                src="instagram.png"
                style={{ width: "48px", marginRight: "12px" }}
              />
              <img
                alt=""
                src="twitter.png"
                style={{ width: "48px", marginRight: "12px" }}
              />
              <img
                alt=""
                src="youtube.png"
                style={{ width: "48px", marginRight: "12px" }}
              />
            </Col>
            <Col md={8}>
              <p className="m-auto" style={{ color: "#555555" }}>
                Copyright &copy; 2023 Dscode | All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default App;
