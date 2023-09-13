import { useSelector } from "react-redux";
import { getAllProducts } from "../../Features/Products/ProductsSlice";
import Card from "../Card";
import { useState } from "react";
import { Pagination } from "antd";

const ProductList = () => {
  const products = useSelector(getAllProducts);
  const [page, setPage] = useState(1);

  const indexOfFirstPage = page === 1 ? 0 : (page - 1) * 20 + 1;
  const indexOfLastPage = page * 20 + 1;

  const currentProducts = products.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <>
      <div className="listproducts__wrap">
        {products.length === 0 ? (
          <img
            alt="loading..."
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          ></img>
        ) : products.length > 20 ? (
          currentProducts.map((item) => {
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
          })
        ) : (
          products.map((item) => {
            return (
              <Card
                id={item?.id}
                key={item?.id}
                src={item?.images?.[0]}
                nameProduct={item?.title}
                descProduct={item?.description}
                price={item?.price}
                rating={item?.rating}
              ></Card>
            );
          })
        )}
      </div>
      {products.length > 20 && (
        <Pagination
          onChange={(value) => {
            setPage(value);
          }}
          current={page}
          pageSize={20}
          total={products?.length}
          showSizeChanger={false}
        />
      )}
    </>
  );
};

export default ProductList;
