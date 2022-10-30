import { useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  // const location = useLocation();
  // console.log(location.state); // { from: "/dashboard?name=hoodie" }

  // return <Link to={location.state.from}>Back to products</Link>;
  const { productId } = useParams();
  return <div>Now showing product with id - {productId}</div>;
};
export default ProductDetails;
