import { useState } from "react";
import styled from "styled-components";

const CalculatorContainer = styled.div`
    text-align: center;
`;
const Input = styled.input`
    width: 90%;
    padding: 11px;
    margin: 0.5vw 1.5vw;
    border: none;
    border-radius: 8px;
    text-align: center;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    background: #fff;
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.1);
`;
const Button = styled.button` {/*adding design to buttons*/}
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    background: #ff5f6d;
    margin: 1.8px;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    &:hover {
        background: #e04e5b;
    }
`;
const Output = styled.p<{ isError?: boolean }>` {/*adding design to output*/}
    font-size: 22px;
    font-weight: bold;
    margin: 15px 0 25px 0;
    font-family: Ariel;
    color: ${({ isError }) => (isError ? "red" : "#4d2600")};
`;

export default function Calculator() {
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<string | number>("");
    const [isError, setIsError] = useState<boolean>(false);

    {/*helper function to parse numbers*/}
    const parseNumber = (value: string) => Number(value) || NaN;

    {/*calculator functions (using mp-1 logic)*/}
    const addition = () => {
        let number1 = parseNumber(num1);
        let number2 = parseNumber(num2);

        if (isNaN(number1) || isNaN(number2)) {
            setResult("Your answer is not a number");
            setIsError(true);
            return;
        }

        let output = number1 + number2;
        setResult(output);
        setIsError(output < 0);
    };

    const subtraction = () => {
        let number1 = parseNumber(num1);
        let number2 = parseNumber(num2);

        if (isNaN(number1) || isNaN(number2)) {
            setResult("Your answer is not a number");
            setIsError(true);
            return;
        }

        let output = number1 - number2;
        setResult(output);
        setIsError(output < 0);
    };

    const multiply = () => {
        let number1 = parseNumber(num1);
        let number2 = parseNumber(num2);

        if (isNaN(number1) || isNaN(number2)) {
            setResult("Your answer is not a number");
            setIsError(true);
            return;
        }

        let output = number1 * number2;
        setResult(output);
        setIsError(output < 0);
    };

    const division = () => {
        let number1 = parseNumber(num1);
        let number2 = parseNumber(num2);

        if (isNaN(number1) || isNaN(number2)) {
            setResult("Your answer is not a number");
            setIsError(true);
            return;
        }
        if (number2 === 0) {
            setResult("Error: you are dividing by zero");
            setIsError(true);
            return;
        }

        let output = number1 / number2;
        setResult(output);
        setIsError(output < 0);
    };
    {/*power function*/}
    const raised = () => {
        let number1 = parseNumber(num1);
        let number2 = parseNumber(num2);

        if (isNaN(number1) || isNaN(number2)) {
            setResult("Your answer is not a number");
            setIsError(true);
            return;
        }

        let output = 1;
        for (let i = 0; i < number2; i++) {
            output *= number1;
        }

        setResult(output);
        setIsError(output < 0);
    };

    const clearCalculator = () => {
        setNum1("");
        setNum2("");
        setResult("");
        setIsError(false);
    };

    return (
        <CalculatorContainer>
            <div>
                <Input
                    type="text"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
                <Input
                    type="text"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
                <div>
                    <Button onClick={addition}>+</Button>
                    <Button onClick={subtraction}>-</Button>
                    <Button onClick={multiply}>*</Button>
                    <Button onClick={division}>/</Button>
                    <Button onClick={raised}>**</Button>
                    <Button onClick={clearCalculator}>Clear</Button>
                </div>
                <Output isError={isError}>{result}</Output>
            </div>
        </CalculatorContainer>
    );
}