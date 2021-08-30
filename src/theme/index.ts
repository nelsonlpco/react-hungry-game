export enum CssAnimations {
  slidIn = 'slid_down',
  slidLeft = 'slid_left',
  slidRight = 'slid_right',
}

export type Theme = {
  colors: {
    primaryBg: string;
    secondaryBg: string;
    ok: string;
    cancel: string;
    off: string;
  };
};

const theme: Theme = {
  colors: {
    primaryBg: '#2E2E2E',
    secondaryBg: '#E9E9E1',
    ok: '#66E093',
    cancel: '#F55F57',
    off: '#737082',
  },
};

export default theme;
