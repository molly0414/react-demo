import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
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
  let navigate = useNavigate()
  const [current, setCurrent] = useState('home');
  const [searchKeyword, setSearchKeyword] = useState('');
  const onSearch = (value) => {
    setSearchKeyword(value);
    navigate("/")
  }
  const clearSearch = () => {
    setSearchKeyword('')
  }
  return (
    <ProductsProvider>
        <Layout className="layout">
          <Header className="header">
            <div className="logo"><Link to="/" onClick={clearSearch}>Test Logo</Link></div>
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
              mode="horizontal">
              <Menu.Item key="home" icon={<HomeOutlined />}><Link to="/" onClick={clearSearch}>Home</Link></Menu.Item>
              <Menu.Item key="cart" icon={<ShoppingCartOutlined />}><Link to="/my-cart">My Cart</Link></Menu.Item>
            </Menu>
          </Header>
          <Content className="site-layout-content">
            <Routes>
              <Route path="/" element={<Products searchKeyword={searchKeyword}/>} />
              <Route path="/my-cart" element={<MyCart />} />
              <Route path="/item/:id" element={<ProductDetail />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2021 Created by Molly Wu</Footer>
        </Layout> 
    </ProductsProvider>
  )
}

export default App;