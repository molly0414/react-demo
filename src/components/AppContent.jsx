import React, { useState, useContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Layout, Menu, Input, Badge } from "antd";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Products from "pages/Products";
import ProductDetail from 'pages/ProductDetail';
import MyCart from "pages/MyCart"; 
import { CartContext } from "contexts/CartProvider";
import 'App.css';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function AppContent() {
  let navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [current, setCurrent] = useState("home");
  const { state } = useContext(CartContext);

  const onSearch = (value) => {
    setSearchKeyword(value);
    navigate("/");
    setCurrent("home")
  };
  const clearSearch = () => {
    setSearchKeyword("");
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">
          <Link to="/" onClick={clearSearch}>
            Test Logo
          </Link>
        </div>
        <Search
          className="search hidden-sm"
          placeholder="Input search text"
          allowClear
          onSearch={onSearch}
        />
        <Menu
          className="menu"
          theme="light"
          onClick={(e) => setCurrent(e.key)}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/" onClick={clearSearch}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
            <Link to="/my-cart">My Cart <Badge count={state.items.length} size="small"><p/></Badge></Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout-content">
        <Routes>
          <Route
            path="/"
            element={<Products searchKeyword={searchKeyword} />}
          />
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/item/:id" element={<ProductDetail />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>©2021 Created by Molly Wu</Footer>
    </Layout>
  );
}

export default AppContent;
