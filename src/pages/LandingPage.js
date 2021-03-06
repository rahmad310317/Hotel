/** @format */

import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Category from "parts/Categories";
import landingPage from "json/landingPage.json";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
	}
	render() {
		return (
			<>
				<Header {...this.props}></Header>
				<Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
				<MostPicked
					refMostPicked={this.refMostPicked}
					data={landingPage.mostPicked}
				/>
				<Category data={landingPage.categories} />
				<Testimony data={landingPage.testimonial} />
				<Footer />
			</>
		);
	}
}
