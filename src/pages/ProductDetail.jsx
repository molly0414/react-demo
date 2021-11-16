import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { ProductsContext, getProducts } from "contexts/ProductsProvider";
import { Spin, Empty, Image, Row, Col, Button, Select, Space } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Option } = Select
const ProductDetail = () => {
  let { id } = useParams();
  const { state, dispatch } = useContext(ProductsContext);
  const { products, isLoading, isLoaded } = state

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return (<div className="center-content site-layout-content"><Spin size="large" /></div>)  
  }

  const options = [];
  for (let i = 1; i < getRandom(2, 10); i++) {
    options.push(<Option key={i} value={i}>{i}</Option>);
  }

  if (isLoaded && products) {
    let product = products.find(obj => obj.id.toString() === id);
    return (
      <div className="site-layout-content">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={6}>
            <Image src={product.image} />
          </Col>
          <Col xs={24} sm={18}>
            <h1 className="title">{product.name}</h1>
            <h1 className="price">NT$ {product.price}</h1>
            <Space>
              <Select size="large" defaultValue="1" style={{ width: 60 }}>
                {options}
              </Select>
              <Button type="primary" size="large" icon={<ShoppingCartOutlined />}>ADD TO CART</Button>
            </Space>
          </Col>
        </Row>
      </div>
    );
  }
  return <Empty />  
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default ProductDetail;
