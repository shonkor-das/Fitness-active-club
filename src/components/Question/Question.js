import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='Question'>
            <h2>Question Answer</h2>
            <div className='question-and-ans'>
                <h3>How does react work?</h3>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div className='question-and-ans'>
                <h3>Difference between props and state in react?</h3>
                <p>Props: The Data is passed from one component to another.It is Immutable (cannot be modified).Props can be used with state and functional components.Props are read-only.</p>
                <p>State: The Data is passed within the component only.It is Mutable ( can be modified).State can be used only with the state components/class component (Before 16.0).State is both read and write.</p>
            </div>
            <div className='question-and-ans last-ans'>
                <h3>ReactJS useEffect is used for data load and another use?</h3>
                <ul>
                    <li>Running once on mount: fetch API data</li>
                    <li>Running on state change: validating input field</li>
                    <li>Running on state change: live filtering</li>
                    <li>Running on state change: trigger animation on new array value</li>
                    <li>Running on props change: update paragraph list on fetched API data update</li>
                    <li>Running on props change: updating fetched API data to get BTC updated price</li>
                </ul>
            </div>
        </div>
    );
};

export default Question;