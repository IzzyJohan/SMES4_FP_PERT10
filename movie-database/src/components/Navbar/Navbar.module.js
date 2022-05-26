import { StyledNavbar, StyledLink } from "./Navbar.styled";

function Navbar() {
    return(
        <StyledNavbar>
            <nav>
                <div>
                    <h1>JARVLIX</h1>
                </div>
                <div>
                    <ul>
                        <li><StyledLink to="/">Home</StyledLink></li>
                        <li><StyledLink to="/movie/create">Add Movie</StyledLink></li>
                        <li><StyledLink to="/movie/popular">Popular</StyledLink></li>
                        <li><StyledLink to="/movie/now">Now Playing</StyledLink></li>
                        <li><StyledLink to="/movie/top">Top Rated</StyledLink></li>
                    </ul>
                </div>
            </nav>
        </StyledNavbar>
    );
}

export default Navbar;