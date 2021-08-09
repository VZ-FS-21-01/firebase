import {
    Link
} from "react-router-dom";


const Nav = (props) => {
    const { user } = props
    console.log(user)
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/db">DB</Link>
                </li>
                {user ? <>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/file-upload">File Upload</Link>
                    </li>
                </> : <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </>}



            </ul>
        </nav>
    );
}

export default Nav;