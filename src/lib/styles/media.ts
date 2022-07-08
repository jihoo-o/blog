export const breakpoints = {
    desktop: 1200,
    laptop: 1024,
    tablet: 768,
    mobile: 480,
};

export const mediaQuery = (maxWidth: number) => `
  @media only screen and (max-width: ${maxWidth}px)
`;
