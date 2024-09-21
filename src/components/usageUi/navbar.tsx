import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IconBaselineDensityMedium } from '@tabler/icons-react';


const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			console.log('Scroll position:', offset);
			setScrolled(offset > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			style={{
				backgroundColor: scrolled ? '#000' : '',
				color: 'white',
				transition: 'background-color 0.3s ease',
				position: "fixed",
				top: 0,
				width: '100%',
				zIndex: 1
			}}
			className="h-[90px] border border-white sticky flex items-center justify-center"
		>
			<div className='hidden lg:block w-full sm:h-full'>


			<div className="w-full h-full pt-[20px] pb-[20px] flex justify-between items-center px-48 ">
				{/* Logo */}
				<div className="">
					<a href="/" className="">
							<Image
								src="/logo.png"
								width={100}
								height={200}
								alt='logo'
						/>
					</a>
				</div>

				{/* Navigation Links */}
				<div className='flex text-center justify-between gap-10 text-lg font-archivo'>
					<a href="/">Games</a>
					<a href="/">Reviews</a>
					<a href="/">About us</a>
					<a className='hover:underline' href="###">Pricing</a>
				</div>

				{/* Sign in and Start Free Button */}
				<div className='flex gap-8 items-center justify-between text-lg font-archivo'>
					<button className='hover:underline text-center px-3'>Sign in</button>
					<button
						className='bg-[#146EB4] w-[122px] h-[50px] rounded text-white font-semibold hover:bg-[#115F9C] hover:shadow-md'
					>
						Start free
					</button>
				</div>
			</div>
			</div>

			<div className=' lg:hidden w-full h-full flex items-center justify-between px-4 md:px-6 '>

				<div>
					<Image
						src="/logo.png"
						width={80}
						height={100}
						alt='logo'
					/>
				</div>

				<div>
					<IconBaselineDensityMedium stroke={2} />
				</div>


			</div>

		</header>
	);
}

export default Navbar;
