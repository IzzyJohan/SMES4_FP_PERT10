// Import styled
import styled from 'styled-components';
import { css } from 'styled-components';

// Buat component button
const Button = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    margin-bottom: 1rem;
    cursor: pointer;

    // Akses props variant
    background-color: ${({ variant, theme }) => theme.colors[variant] || theme.colors.primary}; 

    // Props full
    ${(props) => props.full && css` 
        @media (min-width: 992px) {
            width: 20rem;    
        }
        width: 15rem;
        max-width: 100%;
    `}

    // Props button size
    ${(props) => props.size && css`
    font-size: ${props.theme.buttonsizes[props.size].font};
    padding: ${props.theme.buttonsizes[props.size].padding};
    `}
`;

// Export Button
export default Button;