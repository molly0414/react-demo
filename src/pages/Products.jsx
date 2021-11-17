import React, { useEffect, useContext } from "react";
import { ProductsContext, getProducts } from "contexts/ProductsProvider";
import { Row, Col, Empty } from 'antd';
import ProductCard from "components/ProductCard";

const Products = (props) => {
  const { searchKeyword } = props
  const { state, dispatch } = useContext(ProductsContext);
  const { products, isLoading, isLoaded } = state

  const productsList = 
  products && products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchKeyword.toLowerCase()) || !searchKeyword
    );
  });

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return (
      <Row gutter={[24, 24]}>
        {new Array(8).fill(null).map((_, index) => {
          const key = index + 1;
          return (
            <Col key={key} xs={24} sm={12} md={8} xl={6}>
              <ProductCard data={null}/>
            </Col>
            );
        })}
      </Row>
    );
  }

  if (isLoaded && productsList.length > 0) {
    return (
      <Row gutter={[24, 24]}>
        {productsList.map((data) => 
          <Col key={data.id} xs={12} sm={8} md={6} xl={4}>
            <ProductCard data={data}/>
          </Col>)
        }
      </Row>
    );
  }

  return <Empty />;
};

export default Products