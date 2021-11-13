import React, { useEffect, useContext } from "react";
import { ProductsContext, getProducts } from "contexts/ProductsProvider";
import { Row, Col } from 'antd';
import ProductCard from "components/ProductCard";

const Products = () => {
  const { state, dispatch } = useContext(ProductsContext);
  const { products, isLoading, isLoaded } = state

  const productsList = products ;

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="site-layout-content">
        <Row gutter={[24, 24]}>
          {new Array(8).fill(null).map((_, index) => {
            const key = index + 1;
            return (
              <Col key={key} xs={24} md={8} xl={6}>
                <ProductCard data={null}/>
              </Col>
              );
          })}
        </Row>
      </div>
    );
  }

  return (
    <div className="site-layout-content">
      <Row gutter={[24, 24]}>
        {isLoaded && productsList.map((data) => 
          <Col key={data.id} xs={24} md={8} xl={6}>
            <ProductCard data={data}/>
          </Col>)
        }
      </Row>
    </div>
  );
};

export default Products