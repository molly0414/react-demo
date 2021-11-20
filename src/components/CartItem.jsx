import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, removeFromCart, changeQuantity } from "contexts/CartProvider";
import { Button, Modal, Select } from "antd";
import { CloseOutlined, DeleteOutlined } from "@ant-design/icons";
import { getRandom } from "pages/ProductDetail";

const { Option } = Select;
const { confirm } = Modal;

const CartItem = ({ data }) => {
  const { dispatch } = useContext(CartContext);

  const options = [];
  for (let i = 1; i < getRandom(data.quantity, 10) + 1; i++) {
    options.push(
      <Option key={i} value={i}>
        {i}
      </Option>
    );
  }

  const handleRemove = () => {
    confirm({
      title: "Are you sure you want to delete " + data.name + "?",
      icon: <DeleteOutlined />,
      okText: "Yes",
      cancelText: "No",
      onOk() {
        removeFromCart(dispatch, data.id);
      },
    });
  };

  const handleChange = (value) => {
    changeQuantity(dispatch, data.id, Number(value))
  }

  return (
    <div className="cart-item">
      <Link to={{ pathname: "/item/" + data.id }} style={{ height: "100%" }}>
        <img
          alt={data.title}
          src={data.image}
          className="cart-item-img hidden-sm"
        />
      </Link>
      <Link to={{ pathname: "/item/" + data.id }}>
        <h3 className="cart-item-title">{data.name}</h3>
      </Link>
      <h3 className="cart-item-price">NT$ {data.price}</h3>
      <CloseOutlined style={{ marginRight: 8 }} />
      <Select defaultValue={data.quantity} style={{ width: 60 }} onChange={handleChange}>
        {options}
      </Select>
      <Button
        type="text"
        icon={<DeleteOutlined />}
        onClick={handleRemove}
        className="cart-item-delete"
      />
    </div>
  );
};

export default CartItem;
