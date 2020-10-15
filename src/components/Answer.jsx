import React from "react";
import styled from "styled-components";

const EightBallAnswer = styled.p`
    color: white;
    font-size: 18px;
    font-weight: bold;

    .answerText {
        font-size: 28px;
    }
`;

const Answer = props => {
    return (
        <EightBallAnswer>
            Magic 8 Ball says: <br />
            <span className="answerText">{props.answer}</span>
        </EightBallAnswer>
    )
}

export default Answer;