import React from "react";
import styled from "styled-components";
import Box from "../Box";

const QuoteContainer = styled(Box)`
  min-height: 20vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  ${(props) => props.style || ""}

  @media (min-width: 1024px) {
    width: calc(100vw - 4rem);
  }
`;

const QuoteText = styled.h1`
  font-size: 1.5rem;
  height: auto;
  opacity: ${(props) => (props.fade ? "0" : "1")};
  transition: all ease 1s;
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
    clearInterval(this.timeout);
    clearInterval(this.timeoutSecondary);
  }

  getQuote() {
    fetch("https://api.kanye.rest")
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        this.setState({ fade: true });
        this.timeout = setTimeout(() => {
          this.setState({ quote: response.quote });
        }, 1000);
        this.timeoutSecondary = setTimeout(() => {
          this.setState({ fade: false });
        }, 1200);
      })
      .catch(() => {
        const backupQuotes = [
          "I feel like me and Taylor might still have sex",
          "I love sleep; it's my favorite.",
          "Let's be like water",
          "I am one of the most famous people on the planet",
        ];

        this.setState({ fade: true });
        setTimeout(() => {
          this.setState({
            quote: backupQuotes[Math.random() * 4],
          });
        }, 1000);
        setTimeout(() => {
          this.setState({ fade: false });
        }, 1200);
      });
  }

  render() {
    return (
      <QuoteContainer>
        <h1>Here are some Kanye Quotes:</h1>
        <QuoteText fade={this.state.fade}>{this.state.quote}</QuoteText>
      </QuoteContainer>
    );
  }
}

export default Quote;
