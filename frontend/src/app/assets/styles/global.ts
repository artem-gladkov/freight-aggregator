import { createGlobalStyle } from 'styled-components';
import fontsStyles from './fonts.module.css';
import normalizeStyles from './normalize.module.css';

export default createGlobalStyle`
    ${normalizeStyles}
    ${fontsStyles}
    
    body {
        background: #1E1E1E;
        font-family: Roboto, sans-serif;
        font-weight: 400;
        color: ${({ theme: { colors } }) => colors.gray[300]};
    }

    &::-webkit-scrollbar {
        height: 15px;
        width: 15px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 5px;
        background-color: #1e1e1e;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;
