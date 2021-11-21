import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
import { ProductsContext, getProducts } from "contexts/ProductsProvider";
import { Spin, Empty, Image, Row, Col, Button, Select, Space, message } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartContext, addToCart } from "contexts/CartProvider";

const { Option } = Select
const ProductDetail = () => {
  const [ selectedQuantity, setSelectedQuantity ] = useState("1")
  let { id } = useParams();
  const { state, dispatch: productDispatch } = useContext(ProductsContext);
  const { products, isLoading, isLoaded } = state
  const { dispatch: cartDispatch } = useContext(CartContext);

  useEffect(() => {
    getProducts(productDispatch);
  }, [productDispatch]);

  if (isLoading) {
    return (<div className="center-content"><Spin size="large" /></div>)  
  }

  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push(<Option key={i} value={i}>{i}</Option>);
  }

  if (isLoaded && products) {
    let product = products.find(obj => obj.id.toString() === id);
    const handleAddToCart = () => {
      const item = { ...product, quantity: Number(selectedQuantity) };
      addToCart(cartDispatch, item);
      message.success(product.name + ' is added.');
    };

    return (
      <Row gutter={[24, 24]} justify="center">
        <Col xs={18} sm={9} md={6}>
          <Image src={product.image} />
        </Col>
        <Col xs={18} sm={12} md={8}>
          <h1 className="title">{product.name}</h1>
          <h1 className="price">NT$ {product.price}</h1>
          <Space>
            <Select defaultValue="1" style={{ width: 60 }} onChange={setSelectedQuantity}>
              {options}
            </Select>
            <Button type="primary" icon={<ShoppingCartOutlined />} onClick={handleAddToCart}>ADD TO CART</Button>
          </Space>
        </Col>
      </Row>
    );
  }
  return <Empty />  
};

export default ProductDetail;
