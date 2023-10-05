import { useState } from "react";

const Home = () => {
    // let name = 'Thancred';
    const [name, setName] = useState('Thancred'); //reactive variable with variableName, then setVariableName. Data type in useState can be whatevs
    const [age, setAge] = useState(32)
    const handleClick = (e) => {
        setName('Urianger');
        setAge(29)
        // console.log('damage points', e);
    };
    const handleClick2 = (e) => {
        setName('Krile');
        setAge(22)
        // console.log('damage points', e);
    }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target)
    // }


    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClick2}>Click me</button>
            {/* <button onClick={(e) => {
                handleClickAgain('Music', e)
            }}>Click me again</button> */}
        </div>
    );
}

export default Home;