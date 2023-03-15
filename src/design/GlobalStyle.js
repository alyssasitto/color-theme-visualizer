import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.dark};
  background: ${(props) => props.theme.lightest};
}

section {
   background: ${(props) => props.theme.light};
}



${"" /* Universal classes */}

.small {
	font-weight: normal;
  font-size: 1.3rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.mediumDark};
}

.dark-btn {
color: ${(props) => props.theme.lightest};
background-color: ${(props) => props.theme.dark};
}

.light-btn {
color: ${(props) => props.theme.dark};
background-color: ${(props) => props.theme.lightest};
}


${"" /* Budget card */}

.budget-card h2, .recommended {
  color: ${(props) => props.theme.mediumDark};
  margin-bottom: .5rem;
}

.data-bars .bar-1 {
height: 80%;
background-color: ${(props) => props.theme.lightest};
}

.data-bars .bar-2 {
  height: 50%;
  background-color: ${(props) => props.theme.medium};
}

.data-bars .bar-3 {
  height: 100%;
  background-color: ${(props) => props.theme.mediumDark};
}

.data-bars .bar-4 {
  height: 70%;
  background-color: ${(props) => props.theme.dark};
}

${"" /* Bank card */}

.bank-card {
  background-color: ${(props) => props.theme.lightest};
}

.balance {
  color: ${(props) => props.theme.medium};
}

${"" /* Transaction */}

 .transaction .date {
  color: ${(props) => props.theme.mediumDark};
 }

 .transaction-amount {
     color: ${(props) => props.theme.medium};
}

${"" /* Cash back */}


.cash-back-card {
    background-color: ${(props) => props.theme.medium};
}

.cash-back-card button {
  color: ${(props) => props.theme.dark};
}
`;

export default GlobalStyle;
