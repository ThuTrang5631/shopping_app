import Layout from "../../Components/Layout";
import Cart from "../../Components/Cart";
import { getAllCarts, removeFromCart } from "../../Features/Cart/CartSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Utils/constants";
import { useState } from "react";

const Cartpage = () => {
  const carts = useSelector(getAllCarts);
  const dispatch = useDispatch();
  // let [quantity, setQuatity] = useState(1);

  console.log("carts", carts);

  const newCarts = [];

  const uniqueCarts = carts.filter((element) => {
    const isDuplicate = newCarts.includes(element?.id);

    if (!isDuplicate) {
      newCarts.push(element?.id);

      return true;
    }

    return false;
  });

  const handleDeleteCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const countQuantityofCart = carts.reduce((accumulator, value) => {
    accumulator[value?.id] = ++accumulator[value?.id] || 1;
    return accumulator;
  }, {});

  console.log("unique", uniqueCarts);

  console.log("count quantity", countQuantityofCart);

  return (
    <div className="cartpage wrap-page">
      <Layout>
        {uniqueCarts.length === 0 ? (
          <div className="cartpage__main container-shopapp">
            <div className="cartpage__wrapempty">
              <p className="cartpage__empty">
                Your Cart is <span>Empty!</span>
              </p>
              <Link to={ROUTES.homepage} className="cartpage__emptybtn">
                Return to shop
              </Link>
            </div>
          </div>
        ) : (
          <div className="cartpage__main container-shopapp">
            <h3 className="cartpage__title">
              Your Cart (<span>{uniqueCarts.length} </span>Items)
            </h3>
            <div className="cartpage__content">
              <ul className="cartpage__nav">
                <li>Item</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Total</li>
              </ul>
              <div className="cartpage__listcart">
                {uniqueCarts?.map((item) => {
                  return (
                    <Cart
                      key={item?.id}
                      id={item?.id}
                      linkImageProduct={item?.images?.[0]}
                      nameProduct={item?.title}
                      price={item?.price}
                      total={item?.price}
                      quantity={1}
                      onDelete={() => handleDeleteCart(item)}
                    ></Cart>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Cartpage;
