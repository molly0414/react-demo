import React, { useContext } from "react";
import { Row, Col, Empty, Divider, Button, Modal } from "antd";
import CartItem from "components/CartItem";
import { DeleteOutlined, CheckCircleFilled } from "@ant-design/icons";
import { CartContext, clearCart } from "contexts/CartProvider";

const { confirm } = Modal;

const MyCart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { items } = state;

  const handleRemove = () => {
    confirm({
      title: "Are you sure you want to remove all items?",
      icon: <DeleteOutlined />,
      okText: "Yes",
      cancelText: "No",
      okType: 'danger',
      onOk() {
        clearCart(dispatch);
      },
    });
  };

  if (items.length > 0) {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
      totalPrice += items[i].price * items[i].quantity;
    }
    return (
      <div>
        <Row gutter={[12, 12]} justify="center">
          <Col xs={24} sm={21} md={18} xl={15}>
            <div className="flex-row">
              <h2 className="flex-grow-1">My Cart</h2>
              <Button
                type="text"
                icon={<DeleteOutlined />}
                onClick={handleRemove}
              >
                Remove all items
              </Button>
            </div>
            <Divider style={{ marginTop: 12, marginBottom: 12 }}/>
          </Col>
          {items.map((data) => (
            <Col key={data.id} xs={24} sm={21} md={18} xl={15}>
              <CartItem data={data} />
            </Col>
          ))}
          <Col xs={24} sm={21} md={18} xl={15}>
            <Divider style={{ marginTop: 12, marginBottom: 12 }}/>
            <div className="cart-total">
              <h2 className="cart-item-price">Total: NT$ {totalPrice}</h2>
              <Button
                type="primary"
                icon={<CheckCircleFilled />}
                size="large"
                style={{ width: 180 }}
              >
                CHECKOUT
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  return <Empty />;
};

export default MyCart;
