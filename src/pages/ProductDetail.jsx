import { useParams } from "react-router";

const ProductDetail = () => {
    let { id } = useParams();
    return (
        <div className="site-layout-content">
            ProductDetail component
            <p>Id: {id}</p>
        </div>
    );
};

export default ProductDetail