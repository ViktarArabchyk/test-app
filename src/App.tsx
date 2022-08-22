import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PageLoader from './shared/components/pageLoader';

function App() {
	const Home = lazy(() => import('./pages/home/home'));
	const Login = lazy(() => import('./pages/login/login'));
	const Logout = lazy(() => import('./pages/logout/logout'));

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<PageLoader />}>
							<Home />
						</Suspense>
					}
				>
					<Route
						path="login"
						element={
							<Suspense fallback={<PageLoader />}>
								<Login />
							</Suspense>
						}
					/>
					<Route
						path="logout"
						element={
							<Suspense fallback={<PageLoader />}>
								<Logout />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
