/** @format */

import React from "react";
import Button from "element/Button";
import Fade  from "react-reveal/Fade";

export default function Categories({ data }) {
	return data.map((category, index1) => {
		return (
			<section className='container' key={`category-${index1}`}>
				<Fade Bottom >
				<h4 className='mb-3 font-weight-medium'>{category.name}</h4>
				<div className='container-grid'>
					{category.items.lenght === 0 ? (
						<div className='row'>
							<div className='col-auto align-items-center'>
								There is property at this category
							</div>
						</div>
					) : (
						category.items.map((item, index2) => {
							return (
								<div
									className='item column-3 row-1'
									key={`categoty-${index1}-items-${index2}`}>
										<Fade Bottom delay={300 *index2}>
									<div className='card'>										
										{item.isPopular && (
											<div className='tag'>
												Popular{" "}
												<span className='font-weight-light'>Choice</span>
											</div>
										)}
										<figure className='img-wrapper' style={{ height: 180 }}>
											<img
												src={item.imageUrl}
												alt={item.name}
												className='img-cover'
											/>
										</figure>
										<div className='meta-wrapper'>
											<Button
												type='link'
												href={`/propertis/${item._id}`}
												className='strethed-link d-block text-white'>
												<h5 className='h4'>{item.name}</h5>
											</Button>
											<span className='text-gray-800'>
												{item.city},{item.country}
											</span>
										</div>
									</div>
									</Fade>
								</div>
							);
						})
					)}
				</div>
				</Fade>
			</section>
		);
	});
}
