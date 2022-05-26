import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
        text-decoration: none;
        color: #FFFFFFFF;
`;

const StyledNavbar = styled.div`
    background-color: #ff1622;
    padding: 1rem;
    color: white;

    h1 {
        margin-bottom: 1rem;
    }

    ul {
        list-style: none;
    }

    li {
        margin-bottom: 1rem;
    }

    /* Medium screnn */
    @media (min-width: 768px) {
        nav {
            display: flex;
            direction: row;
            justify-content: space-between;
            align-items: center;
        }

        ul {
            display: flex;
            direction: row;
        }

        li {
            margin: 0 1rem;
        }

        h1 {
            margin: 0;
        }
    }
`;

export { StyledNavbar, StyledLink };