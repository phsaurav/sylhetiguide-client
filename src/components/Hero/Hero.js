import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Hero.css';

const contents = [
	{
		key: 1,
		img: '/assets/covers/cover-1.jpg',
	},
	{
		key: 2,
		img: '/assets/covers/cover-2.jpg',
	},
	{
		key: 3,
		img: '/assets/covers/cover-3.jpg',
	},
	{
		key: 4,
		img: '/assets/covers/cover-4.jpg',
	},
	{
		key: 5,
		img: '/assets/covers/cover-5.jpg',
	},
	{
		key: 6,
		img: '/assets/covers/cover-6.jpg',
	},
];

const Hero = () => {
	return (
		<div className="relative">
			<Slider
				autoplay="1000"
				infinite="true"
				classNames="buttonDisabled previousButton disabled "
				className="slider-wrapper"
				previousButton=""
				nextButton=""
			>
				{contents.map((content) => (
					<div
						className="absolute top-0 w-full"
						key={content.key}
						style={{
							backgroundImage: `url(${content.img})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							height: '555px',
						}}
					></div>
				))}
			</Slider>
			<div>
				<span
					id="blackOverlay"
					className="w-full absolute bg-center opacity-20 bg-black top-0"
					style={{ height: '500px' }}
				></span>
			</div>
		</div>
	);
};

export default Hero;
