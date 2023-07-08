import React, { useEffect, useState } from 'react'
import Navbar from './component/pages/Navbar';
import Weddings from './component/pages/Wedding';
import Preweddings from './component/pages/Prewedding';
import Portraits from './component/pages/Portrait';
import Home from './component/pages/Home';
import Maternity from './component/pages/Maternity';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Footer from './component/pages/footer';
import Babyshoot from './component/pages/Babyshoot';
import Testimonial from './component/pages/Testimonial';
import ContactModal from './component/pages/Contactmodal';
// import { useInView, InView } from 'react-intersection-observer';


function App() {


	const [modalVisible, setmodalVisible] = useState(false);

	// const { ref, inView } = useInView({ triggerOnce: true, delay: 2000 })

	// useEffect(() => {

	//     if (inView) {
	//         setmodalVisible(true)
	//         console.log("YES")
	//     } else {
	//         console.log("NO")
	//     }

	// }, [inView])


	// useEffect(() => {
	//     window.scrollTo({
	//         top: 0,
	//         behavior: "smooth",
	//     });
	// }, [])

	const handleScroll = () => {
		const position = window.pageYOffset;
		console.log(position)
		if (position > (window.document.body.offsetHeight * 55 / 100) && !modalVisible) {
			setmodalVisible(true)
			window.removeEventListener('scroll', handleScroll);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);


	return (
		<>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/About' element={<About />} />
					<Route path='/Babyshoot' element={<Babyshoot />} />
					<Route path='/Wedding' element={<Weddings />} />
					<Route path='/Prewedding' element={<Preweddings />} />
					<Route path='/Portrait' element={<Portraits />} />
					<Route path='/Maternity' element={<Maternity />} />
					<Route path='/Testimonial' element={<Testimonial />} />
					<Route path='/Contact' element={<Contact />} />
				</Routes>
			</div>
			<ContactModal
				isOpen={modalVisible}
				setmodalVisible={setmodalVisible}
			/>
			<Footer
			//   refProp={ref}
			/>
		</>
	);
}

export default App;
