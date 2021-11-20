import React, { useContext } from "react";
import { CartContext } from "contexts/CartProvider";
import { Row, Col, Empty } from "antd";
import CartItem from "components/CartItem";

const MyCart = () => {
  const { state } = useContext(CartContext);
  const { items } = state;

  if (items.length > 0) {
    return (
      <Row gutter={[12, 12]} justify="center">
        {items.map((data) => (
          <Col key={data.id} xs={24} sm={21} md={18} xl={15}>
            <CartItem data={data}/>
          </Col>
        ))}
      </Row>
    );
  }

  return <Empty />;
};

export default MyCart;
