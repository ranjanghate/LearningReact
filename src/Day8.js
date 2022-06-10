import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Day8/Home.js'
import { About } from './components/Day8/Home/About.js'
import { Nav } from './components/Day8/Home/Nav.js'
import { OrderSummary } from './components/Day8/Home/OrderSummary.js';
import { NoMatch } from './components/Day8/Home/NoMatch.js';
import { Products } from './components/Day8/Home/Products.js';
import { NewProducts } from './components/Day8/Home/NewProducts.js';
import { FeaturedProducts } from './components/Day8/Home/FeaturedProducts.js';
import { Users } from './components/Day8/Home/Users.js';
import { UserDetails } from './components/Day8/Home/UserDetails.js';
import { Admin } from './components/Day8/Home/Admin.js';

function Day8() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/order-summary' element={<OrderSummary />}/>
        <Route path='/products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
        </Route>
        <Route path='/users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />}> </Route>
          <Route path='admin' element={<Admin />}> </Route>
        </Route>
        <Route path='*' element={<NoMatch />}/>
      </Routes>
    </div>
  );
}

export default Day8;
