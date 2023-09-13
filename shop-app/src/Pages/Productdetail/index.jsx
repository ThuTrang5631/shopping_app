import Layout from "../../Components/Layout";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Rate } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncDetailProduct,
  getProductDetail,
} from "../../Features/Products/ProductsSlice";
import Card from "../../Components/Card";
import axios from "axios";
import { addToCart } from "../../Features/Cart/CartSlice";
import { getAllCarts } from "../../Features/Cart/CartSlice";

const Productdetail = () => {
  let [quantity, setQuatity] = useState(1);
  const [productSuggest, setProductSuggest] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);

  const data = useSelector(getProductDetail);
  const [activeImg, setActiveImg] = useState(data && data?.images?.[0]);

  const getProductSuggest = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${data?.category}`
      );
      const productSuggest = res?.data;
      setProductSuggest(productSuggest?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchAsyncDetailProduct(id));
    getProductSuggest();
  }, [dispatch, id, data?.category]);

  const handleAddToCart = (data) => {
    for (let i = 1; i <= quantity; i++) {
      dispatch(addToCart(data));
    }
  };

  let cartProductQuantity = 0;
  const getQuantityProductCart = carts.filter((element) => {
    if (element?.id === data?.id) {
      cartProductQuantity++;
    }
  });

  return (
    <div className="productdetail wrap-page">
      <Layout>
        <div className="productdetail__main ">
          <section className="productdetail__nav container-shopapp">
            <Breadcrumb
              items={[
                {
                  title: <Link to="/">ShopCart</Link>,
                },
                {
                  title: `${data?.category}`,
                },
                {
                  title: `${data?.title}`,
                },
              ]}
            />
          </section>
          <section className="productdetail__wrapproduct container-shopapp">
            <div className="productdetail__left">
              <div className="productdetail__image">
                <img alt="product" src={activeImg || data?.images?.[0]}></img>
              </div>
              <div className="productdetail__slideimage">
                {data?.images?.map((item, id) => {
                  return (
                    <img
                      key={id}
                      alt="slide product"
                      className="productdetail__thumbnail"
                      src={item}
                      onClick={() => setActiveImg(item)}
                    ></img>
                  );
                })}
              </div>
            </div>
            <div className="productdetail__right">
              <div className="productdetail__content">
                <h3 className="name">{data?.title}</h3>
                <p className="desc">{data?.description}</p>
                <Rate disabled allowHalf value={data?.rating} />
              </div>
              <div className="productdetail__content wrap__category">
                <ul className="item category">
                  <li>Category:</li>
                  <li>{data?.category}</li>
                </ul>
                <ul className="item brand">
                  <li>Brand:</li>
                  <li>{data?.brand}</li>
                </ul>
              </div>
              <div className="productdetail__content">
                <p className="price">
                  <span>₫</span>
                  {`${data?.price}000`}
                </p>
              </div>
              <div className="productdetail__content wrap__stock">
                <div className="productdetail__choosequantity">
                  <button
                    disabled={quantity === 1}
                    onClick={() => setQuatity(quantity - 1)}
                    className="action"
                  >
                    -
                  </button>
                  <input
                    value={
                      quantity > data?.stock
                        ? (quantity = data?.stock)
                        : quantity
                    }
                  ></input>
                  <button
                    onClick={() => setQuatity(quantity + 1)}
                    className="action"
                  >
                    +
                  </button>
                </div>
                <p className="product-stock">
                  <span>
                    {cartProductQuantity === 0
                      ? data?.stock
                      : data?.stock - cartProductQuantity}
                  </span>{" "}
                  products available
                </p>
              </div>
              <div className="productdetail__content wrap__btns">
                <button className="productdetail__btns buy-btn">Buy Now</button>
                <button
                  onClick={() => handleAddToCart(data)}
                  className="productdetail__btns addtocard-btn"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </section>
          <section className="productdetail__productsuggest container-shopapp">
            <h3 className="productdetail__suggesttitle">
              Products related to this item
            </h3>
            <div className="listproducts__wrap">
              {productSuggest.map((item) => {
                return (
                  <Card
                    id={item?.id}
                    key={item?.id}
                    src={item?.images[0]}
                    nameProduct={item?.title}
                    descProduct={item?.description}
                    price={item?.price}
                    rating={item?.rating}
                  ></Card>
                );
              })}
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Productdetail;
