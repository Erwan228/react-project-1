import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // let name = 'Thancred';
    // const [name, setName] = useState('Thancred'); //reactive variable with variableName, then setVariableName. Data type in useState can be whatevs
    // const [age, setAge] = useState(32)
    // const handleClick = (e) => {
    //     setName('Urianger');
    //     setAge(29)
    // console.log('damage points', e);
    // };
    // const handleClick2 = (e) => {
    //     setName('Krile');
    //     setAge(22)
    // console.log('damage points', e);
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target)
    // }
    const [blogs, setBlogs] = useState(null)

    const [name, setName] = useState('Music')

    const [isPending, setIsPending] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json()
                })
                .then((data => {
                    console.log(data);
                    setBlogs(data);
                    setIsPending(false)
                }))
        }, 1000);
    }, []);


    return (
        <div className="home">
            {/* <p>{name} is {age} old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClick2}>Click me</button> */}
            {/* <button onClick={(e) => {
                handleClickAgain('Music', e)
            }}>Click me again</button> */}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All blogs!' />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Music')} title="Music's blogs!" />}
            <button onClick={() => setName('Keith')}>Change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;