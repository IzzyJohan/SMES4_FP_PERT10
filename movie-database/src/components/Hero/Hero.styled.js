import styled from "styled-components"

const StyledHero = styled.div`
    padding: 1rem;
    text-align: center; 
    
    h2 {
        color: #ff1622;
        margin-bottom: 1rem;
    }

    h3 {
        color: #ff1622;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
    }

    img {
        max-width: 100%;
        border-radius: 12px;
    }

    @media screen and (min-width: 992px) {
        text-align: left;
        max-width: 1200px;
        margin: 0 auto;

        section {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
    }
`;

const Leftside = styled.div`
    @media screen and (min-width: 992px) {
        flex-basis: 60%;
        padding-right: 1rem;
    }
`;

const Rightside = styled.div`
    @media screen and (min-width: 992px) {
        flex-basis: 40%;
        padding-left: 1rem; 
    }
    
`;

export { StyledHero, Leftside, Rightside };
