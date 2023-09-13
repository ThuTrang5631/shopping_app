import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../Features/Products/ProductsSlice";
import Modal from "../../Components/Modal";
import { useRef } from "react";
import { getAllCarts } from "../../Features/Cart/CartSlice";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Utils/constants";

const Header = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const carts = useSelector(getAllCarts);
  console.log("carts", carts);

  const fetchDataSearch = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      const data = res?.data;
      console.log("res", res?.data);
      if (data?.products?.length === 0) {
        setOpenModal(true);
      } else {
        dispatch(addProducts(data.products));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      fetchDataSearch();
    } else {
      setOpenModal(true);
    }
  };

  const getCategories = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/categories`);
      const data = res?.data;
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductOfCategory = async (e) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${e.target.textContent}`
      );
      const data = res?.data;
      dispatch(addProducts(data.products));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleClickEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const newArr = [];

  const uniqueCarts = carts.filter((element) => {
    const isDuplicate = newArr.includes(element?.id);

    if (!isDuplicate) {
      newArr.push(element?.id);

      return true;
    }

    return false;
  });

  return (
    <header className="header">
      <Navbar expand="lg" className="bg-body-tertiary header__wrapper">
        <Container fluid>
          <Navbar.Brand href="/" className="header__name">
            ShopCart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavDropdown
                className="header__desc"
                title="Categories"
                id="navbarScrollingDropdown"
              >
                <div className="header__dropdowncontain">
                  {categories.map((item, id) => {
                    return (
                      <Link
                        onClick={getProductOfCategory}
                        key={id}
                        className="header__dropdownitem header__dropdownitemNoActive"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </NavDropdown>
            </Nav>
            <Form className="d-flex header__search">
              <Form.Control
                onKeyDown={handleClickEnter}
                ref={ref}
                type="search"
                placeholder="search for product..."
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSubmit} variant="outline-success">
                Search
              </Button>
            </Form>
            <div className="header__cart">
              <Link className="header__linkcart" to={ROUTES.cartpage}>
                <i className="fa-solid fa-cart-shopping"></i>
                {uniqueCarts.length !== 0 && (
                  <span className="header__cartquantity">
                    {uniqueCarts.length}
                  </span>
                )}
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        openModal={openModal}
        content="No products. Look for another product"
        onCancel={() => {
          ref.current.value = "";
          setOpenModal(false);
          setSearch();
        }}
      ></Modal>
    </header>
  );
};

export default Header;
