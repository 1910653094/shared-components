/* [data-theme="dark"] {
  --background-color: #222222;
  --background-second: #424242;
  --shadow-color: #323232;

  --light-text-color: #656565;

  --primary-color: #DDDDDD;/!*#FFFFFF;*!/
  --secondary-color: #ADB6BA;/!*#CFD8DC;*!/
  --tertiary-color: #909CA3;/!*#B0BEC5;*!/

  --interactive-color: #0071BC;
} */

export const Colors = {
  primary: '#222222',
  secondary: '#37474F',
  tertiary: '#455A64',
  interactive: '#387cf6',
  Background: {
    primary: '#FFFFFF',
    secondary: '#DFDFDF',
    shadow: '#EFEFEF',
  } as const,
  Text: {
    light: '#BCBCBC',
  } as const,
  Error: {
    primary: '#BF0000',
  } as const,
} as const;
