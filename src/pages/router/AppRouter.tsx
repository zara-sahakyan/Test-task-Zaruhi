import { Route, Routes } from 'react-router-dom';
import { Products } from '../products/Products';
import { Layout } from '../Layout';
import { Home } from '../home/Home';
import { Resources } from '../resources/Resources';
import { Services } from '../services/Services';
import { Locations } from '../locations/Locations';
import { Careers } from '../careers/Careers';
import { Support } from '../support/Support';

export function AppRouter() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="resources" element={<Resources />} />
        <Route path="services" element={<Services />} />
        <Route path="locations" element={<Locations />} />
        <Route path="careers" element={<Careers />} />
        <Route path="support" element={<Support />} />
    </Route>
    </Routes>
  );
}
