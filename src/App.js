import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import 'App.css';
import MyCart from "pages/MyCart";
import Products from "pages/Products";
import ProductDetail from 'pages/ProductDetail';
import ProductsProvider from "contexts/ProductsProvider";

const { Header, Content, Footer } = Layout;

function App() {
  const [current, setCurrent] = useState('home');

  return (
    <ProductsProvider>
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal">
              <Menu.Item key="home" icon={<HomeOutlined />}><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="cart" icon={<ShoppingCartOutlined />}><Link to="/my-cart">My Cart</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '50px' }}>
            <Routes>
              <Route exact path="/" element={<Products />} />
              <Route path="/my-cart" element={<MyCart />} />
              <Route path="/item/:id" element={<ProductDetail />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2021 Created by Molly Wu</Footer>
        </Layout>
      </Router>  
    </ProductsProvider>
  )
}

export default App;