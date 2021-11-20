import React from "react";
import { Card, Skeleton } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({ data }) => {
  if (data === null) {
    return (
      <Card style={{ height: 300 }}>
        <Skeleton loading="true" />
        <Meta title="" description=""/>    
      </Card>
    );
  } else {
    return (
      <Link to={{ pathname: "/item/" + data.id }}>
        <Card hoverable cover={<img alt={data.title} src={data.image}/>}>
          <Meta title={data.name} description={"NT$ " + data.price}/>    
        </Card>
      </Link>
    );
  }
};

export default ProductCard;