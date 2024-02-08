import {link} from 'react-router-dom';

const NavBar = () => {
    return (
        <ul>
            <li>
                <link>Politics</link>
            </li>
            <li>
                <link>Finance</link>
            </li>
            <li>
                <link>Health & Science</link>
            </li>
            <li>
                <link>Entertainment</link>
            </li>
        </ul>
    )
}
export default NavBar;