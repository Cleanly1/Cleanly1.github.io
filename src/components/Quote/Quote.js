import React from "react";
import styled from "styled-components";

const QuoteContainer = styled.div`
	max-width: 80%;
	min-height: 20vh;
	padding: 3rem;
	background-color: rgba(0, 0, 0, 0.6);
	border-radius: 5px;

	@media (min-width: 1024px) {
		width: 50%;
	}
`;

const QuoteText = styled.h1`
	font-size: 1.5rem;
	opacity: ${(props) => (props.fade ? "0" : "1")};
	transition-duration: 1s;
`;

class Quote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			interval: 8,
			quote: "",
			fade: false,
		};
	}

	componentDidMount() {
		this.getQuote();
		this.timerID = setInterval(() => {
			this.getQuote();
		}, 1000 * this.state.interval);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	getQuote() {
		fetch("https://api.kanye.rest")
			.then(function (response) {
				return response.json();
			})
			.then((response) => {
				this.setState({ fade: true });
				setTimeout(() => {
					this.setState({ quote: response.quote });
				}, 1000);
				setTimeout(() => {
					this.setState({ fade: false });
				}, 1200);
			});
	}

	render() {
		return (
			<QuoteContainer>
				<QuoteText fade={this.state.fade}>{this.state.quote}</QuoteText>
			</QuoteContainer>
		);
	}
}

export default Quote;
