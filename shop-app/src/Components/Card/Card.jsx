import { Link } from "react-router-dom";
import { Rate } from "antd";

const Card = ({ id, src, nameProduct, descProduct, price, rating }) => {
  return (
    <Link className="card" to={`/detail/${id}`}>
      <div className="card__image">
        <img src={src} alt="product"></img>
      </div>
      <div className="card__content">
        <h5 className="card__nameproduct">{nameProduct}</h5>
        <p className="card__desc">{descProduct}</p>
        <p className="card__price">
          <span className="card__iconmoney">₫</span>
          {`${price}000`}
        </p>
        <Rate disabled allowHalf defaultValue={rating} />
      </div>
    </Link>
  );
};

export default Card;
