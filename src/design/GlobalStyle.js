import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.tester {
  color: ${(props) => props.theme.dark};
  background: ${(props) => props.theme.lightest};
}

.tester section {
   background: ${(props) => props.theme.light};
}




.tester .small {
	font-weight: normal;
  font-size: 1.3rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.mediumDark};
}

.tester .dark-btn {
color: ${(props) => props.theme.lightest};
background-color: ${(props) => props.theme.dark};
}

.tester .light-btn {
color: ${(props) => props.theme.dark};
background-color: ${(props) => props.theme.lightest};
}


${"" /* Budget card */}

.tester .budget-card h2, .recommended {
  color: ${(props) => props.theme.mediumDark};
  margin-bottom: .5rem;
}

.tester .data-bars .bar-1 {
height: 80%;
background-color: ${(props) => props.theme.lightest};
}

.tester .data-bars .bar-2 {
  height: 50%;
  background-color: ${(props) => props.theme.medium};
}

.tester .data-bars .bar-3 {
  height: 100%;
  background-color: ${(props) => props.theme.mediumDark};
}

.tester .data-bars .bar-4 {
  height: 70%;
  background-color: ${(props) => props.theme.dark};
}

${"" /* Bank card */}

.tester .bank-card {
  background-color: ${(props) => props.theme.lightest};
}

.tester .balance {
  color: ${(props) => props.theme.medium};
}

${"" /* Transaction */}

.tester .transaction .date {
  color: ${(props) => props.theme.mediumDark};
 }

.tester .transaction-amount {
     color: ${(props) => props.theme.medium};
}

${"" /* Cash back */}


.tester .cash-back-card {
    background-color: ${(props) => props.theme.medium};
}

.tester .cash-back-card button {
  color: ${(props) => props.theme.dark};
}

${"" /* Theme modal */}

.tester .modal {
  background-color: ${(props) => props.theme.medium};
}

.tester .modal label {
  font-weight: bold;
    color: ${(props) => props.theme.dark};
}

.tester .modal input {
    background-color: ${(props) => props.theme.lightest};
}

.tester .modal input::placeholder {
    color: ${(props) => props.theme.dark};
}

.tester .modal button {
    color: ${(props) => props.theme.lightest};
    font-weight: bold;
    background-color: ${(props) => props.theme.dark};
}

`;

export default GlobalStyle;
