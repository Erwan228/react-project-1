const Home = () => {

    const handleClick = (e) => {
        console.log('damage points', e);
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name)
    }


    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                handleClickAgain('Music')
            }}>Click me again</button>
        </div>
    );
}

export default Home;