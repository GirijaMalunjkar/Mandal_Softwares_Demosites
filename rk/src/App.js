import React, { useEffect, useState } from 'react'
import Navbar from './pages/Navbar';
import Weddings from './pages/Wedding';
import Preweddings from './pages/Prewedding';
import Portraits from './pages/Portrait';
import Home from './pages/Home';
import Maternity from './pages/Maternity';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Footer from './pages/footer';
import Babyshoot from './pages/Babyshoot';
import Testimonial from './pages/Testimonial';
import Services from './pages/Services';
import Packages from './pages/Package';
// import { useInView, InView } from 'react-intersection-observer';


function App() {

	return (
		<>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/About' element={<About />} />
					<Route path='/Services' element={<Services />} />
					<Route path='/Babyshoot' element={<Babyshoot />} />
					<Route path='/Wedding' element={<Weddings />} />
					<Route path='/Prewedding' element={<Preweddings />} />
					<Route path='/Portrait' element={<Portraits />} />
					<Route path='/Maternity' element={<Maternity />} />
					<Route path='/Testimonial' element={<Testimonial />} />
					<Route path='/Contact' element={<Contact />} />
					<Route path='/Packages' element={<Packages />} />
				</Routes>
			</div>
			<Footer/>
		</>
	);
}

export default App;
