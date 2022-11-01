import { useSearchParams } from 'react-router-dom';
import { ProductList } from '../components/ProductList';
import { SearchBox } from '../components/SearchBox';
import { getProducts } from '../fakeAPI';
import { useLocation } from 'react-router-dom';

export const Products = () => {
  const location = useLocation();
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      {/* <Link to="/product/h-1" state={{ from: location }}>
        Navigate to product h-1
      </Link> */}
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
};
