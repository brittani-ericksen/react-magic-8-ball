import React, { useState } from "react";
import styled from "styled-components";
import Answer from "./Answer";

const Ball = styled.div`
    background-color: black;
    border-radius: 50%;
    display: inline-block;
    height: 600px;
    margin: 30px;
    width: 600px;
`;

const BallLogo = styled.div`
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    color: black;
    display: inline-block;
    font-weight: bold;
    height: 200px;
    margin-top: 50px;
    width: 200px;

    .ball-text {
        display: block;
        font-size: 150px;
        margin: 10px; 
    }
`;

const EightBall = props => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const _handleChange = (question) => {
        setQuestion(question);
    };

    const _handleSubmit = async (event) => {
        event.preventDefault();
        const url = `https://8ball.delegator.com/magic/JSON/${question}`;
        const response = await fetch(url);
        const data = await response.json();
        // updates the state 
        setAnswer(data.magic.answer);
    };

    return (
        <>
            <h1>Magic Eight Ball</h1>
            <form onSubmit={(event) => _handleSubmit(event)}>
                <label>
                    What is your question?
                    <br />
                    <input type="text" value={question} onChange={(event) => _handleChange(event.target.value)}/>
                </label>
                <br />
                <button type="submit">Ask the Magic 8 Ball</button>
            </form>
            <Ball>
                <BallLogo>
                    <span className="ball-text">8</span>
                </BallLogo>
                {!!answer ? <Answer answer={answer} /> : null} 
            </Ball>
        </>
    )
}

export default EightBall;