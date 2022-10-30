import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import { Products } from '../pages/Products';
import Mission from './Mission';
import Team from './Team';
import Reviews from './Reviews';
import { SharedLayout } from './SharedLayout';
// import { useLocation } from 'react-router-dom';

export const App = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   Analytics.send(location);
  // }, [location]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {console.log(<SharedLayout />)}
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};
