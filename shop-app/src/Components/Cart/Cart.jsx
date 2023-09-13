import { Link } from "react-router-dom";

const Cart = ({
  linkImageProduct,
  nameProduct,
  price,
  quantity,
  total,
  onDelete,
  id,
}) => {
  return (
    <div className="cart">
      <div className="cart__item cart__desc">
        <Link className="cart__link" to={`/detail/${id}`}>
          <img src={linkImageProduct} alt="product"></img>
          <p className="desc">{nameProduct}</p>
        </Link>
      </div>
      <p className="cart__item desc">
        <span>₫</span>
        {`${price}000`}
      </p>
      <div className="cart__item cart__wrapaction productdetail__choosequantity">
        <span className="cart__itemquantity">{quantity}</span>
      </div>
      <div className="cart__item cart__delete">
        <p className="desc total">
          <span>₫</span>
          {`${total}000`}
        </p>
        <button onClick={onDelete} className="cart__btndelete">
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
