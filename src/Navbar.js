import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Paladins Journal</h1>
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/create"
                // style={{
                //     color: "white",
                //     backgroundColor: '#f1356d',
                //     borderRadius: '8px',
                // }}
                >New entry</Link>
            </div>
        </nav>
    );
}

export default Navbar;