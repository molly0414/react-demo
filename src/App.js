import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Input } from 'antd';
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import 'App.css';
import MyCart from "pages/MyCart";
import Products from "pages/Products";
import ProductDetail from 'pages/ProductDetail';
import ProductsProvider from "contexts/ProductsProvider";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function App() {
  const [current, setCurrent] = useState('home');
  const onSearch = (value) => console.log(value);
  return (
    <ProductsProvider>
      <Router>
        <Layout className="layout">
          <Header className="header">
            <div className="logo"><Link to="/react-demo">Test Logo</Link></div>
            <Search
              className="search hidden-sm"
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
            />
            <Menu 
              className="menu" 
              theme="light" 
              onClick={(e) => setCurrent(e.key)} 
              selectedKeys={[current]} 
              mode="horizontal">
              <Menu.Item key="home" icon={<HomeOutlined />}><Link to="/react-demo">Home</Link></Menu.Item>
              <Menu.Item key="cart" icon={<ShoppingCartOutlined />}><Link to="/my-cart">My Cart</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '48px' }}>
            <Routes>
              <Route path="/react-demo" element={<Products />} />
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