import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from '../pages/home/HomeView';
import ProductDetailView from '../pages/productDetail/ProductDetailView';
import RegisterView from '../pages/register/RegisterView';
import LoginView from '../pages/login/LoginView';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomeView />} />
				<Route path='/login' element={<LoginView />} />
				<Route path='/register' element={<RegisterView />} />

				<Route path='/product/:id' element={<ProductDetailView />} />
			</Routes>
		</BrowserRouter>
	);
};
export { Router };
