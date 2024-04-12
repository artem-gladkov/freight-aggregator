import { DefaultTheme } from 'styled-components';
import { ThemeConfig } from 'antd';

export const theme: DefaultTheme = {
  colors: {
    primary: '#FF9A19',
    success: '#017B59',
    error: '#f60000',
    gray: {
      100: '#E7E7E7',
      200: '#818281',
      300: '#404140',
    },
    white: '#fff',
  },
  borderRadius: {
    small: '8px',
    medium: '16px',
  },
  indents: {
    small: '16px',
    medium: '24px',
  },
  fontSize: {
    small: '14px',
    medium: '16px',
    big: '20px',
  },
};

export const antdTheme: ThemeConfig = {
  token: { colorPrimary: theme.colors.primary },
};
