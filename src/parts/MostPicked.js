/** @format */

import React from "react";
import Fade  from "react-reveal/Fade";
import Button from "element/Button";

export default function MostPicked(props) {
	return (
		
		<section className='container' ref={props.refMostPicked}>
			<Fade bottom>
			<h4 className='mb-3'>Hotel Yang Kami Sediakan</h4>
			<div className='container-grid'>
				{props.data.map((item, index) => {
					return (						
						<div
							key={`mostpikced-${index}`}
							className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}>
								<Fade Bottom delay={500 * index}>
							<div className='card card-featured'>
								<div className='tag'>
									${item.price}
									<span className='font-weight-ligt'>per{item.unit}</span>
								</div>
								<figure className='img-wrapper'>
									<img
										src={item.imageUrl}
										alt={item.name}
										className='img-cover'
									/>
								</figure>
								<div className='meta-wrapper'>
									<Button
										type='link'
										className='streched-link text-white'
										href={`/propertis ${item._id}`}>
										<h5>{item.name}</h5>
									</Button>
									<span className='text-gray-500'>
										{item.city},{item.country}
									</span>
								</div>
							</div>
							</Fade>
						</div>						
					);
				})}
			</div>
			</Fade>
		</section>
		
	);
}
