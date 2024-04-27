// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: '#FF9A19';
      success: '#017B59';
      error: '#f60000';
      gray: {
        100: '#E7E7E7';
        200: '#818281';
        300: '#404140';
      };
      white: '#fff';
    };
    borderRadius: {
      small: '8px';
      medium: '16px';
    };
    indents: {
      small: '16px';
      medium: '24px';
    };
    fontSize: {
      s: '14px';
      m: '16px';
      l: '18px';
      xl: '20px';
    };
  }
}
