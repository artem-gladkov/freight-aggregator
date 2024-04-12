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
`;
