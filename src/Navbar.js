const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Paladins Journal</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/write"
                // style={{
                //     color: "white",
                //     backgroundColor: '#f1356d',
                //     borderRadius: '8px',
                // }}
                >New entry</a>
            </div>
        </nav>
    );
}

export default Navbar;