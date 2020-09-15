import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    light: string;
    gray: string;
    dark: string;

    fontFamily: string;
    fontDefault: string;
    fontXs: string;
    fontMd: string;
    fontLg: string;

    lightly: number;
    normal: number;
    bold: number;

    breakpointDesktop: string;
    breakPointMobile: string;
    breakpointTablet: string;
    breakpointWide: string;
  }
}
