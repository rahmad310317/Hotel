/** @format */

import React from "react";
import Fade  from "react-reveal/Fade";
import Star from "element/star";
import Frame from "assets/images/frame.jpg";

import Button from "element/Button";

export default function Testimony({ data }) {
	return (
		<Fade Bottom>
		<section className='container'>
			<div className='row align-items-center'>
				<div className='col-auto' style={{ marginRight: 60 }}>
					<div className='testimonial-hero' style={{ margin: `30px 0 0 30px` }}>
						<img
							src={data.imageUrl}
							alt='Testimonial'
							className='position-absolute'
							style={{ zIndex: 1 }}
						/>
						<img
							src={Frame}
							alt='Testimonial frame'
							className='position-absolute'
							style={{ margin: `-30px 0 0 -30px` }}
						/>
					</div>
				</div>
				<div className='col'>
					<h4 className={{ marginButtom: 70 }}>{data.name}</h4>
					<Star value={data.rate} width={35} height={35} spacing={4} />
					<h5 className='h2 font weigth-light line-heigth-2 my-3'>
						{data.content}
					</h5>
					<span className='text-gray-500'>
						{data.familyName}, {data.familyOccupation}
					</span>
					<div>
						<Button
							className='btn px-5'
							style={{ marginTop: 100 }}
							hasShadow
							isPrimary
							type='link'
							href={`./testimonial/${data._id}`}>
							Read Story
						</Button>
					</div>
				</div>
			</div>
		</section>
		</Fade>
	);
}
