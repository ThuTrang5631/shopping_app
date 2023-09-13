import Layout from "../../Components/Layout/Layout";
import Slider from "../../Components/Slider";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../../Features/Products/ProductsSlice";
import axios from "axios";
import ProductList from "../../Components/ProductsList";

const Homepage = () => {
  const dispatch = useDispatch();

  const fetchCardList = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products?limit=0`);
      const data = res?.data;
      console.log("res", res?.data);
      dispatch(addProducts(data.products));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCardList();
  }, []);

  return (
    <div className="homepage wrap-page">
      <Layout>
        <Slider />
        <section className="listproducts container-shopapp">
          <h3 className="listproducts__title">Products For You</h3>
          <div className="listproducts__wrap">
            <ProductList />
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Homepage;
