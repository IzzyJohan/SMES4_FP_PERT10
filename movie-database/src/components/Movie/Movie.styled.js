import styled from "styled-components";

const StyledMovie = styled.div`
    img {
        max-width: 100%;
        border-radius: 10px;
        margin-bottom: 1rem;
    }

    h3 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 768px) {
        flex-basis: 50%;     
    }

    @media screen and (min-width: 992px) {
        flex-basis: 25%;
        padding: 1rem;
    }
`;

export default StyledMovie;