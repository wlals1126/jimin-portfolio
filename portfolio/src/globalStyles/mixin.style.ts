import styled, { css } from "styled-components";

export const variables = {
  size: {
    small: "10px",
    medium: "14px",
    large: "18px",
  },
  weight: {
    light: 300,
    regular: 400,
    bold: 700,
  },
};

export const size = (key: keyof typeof variables.size): string | null => {
  if (variables.size.hasOwnProperty(key)) {
    return variables.size[key];
  }
  console.warn(`Unknown '${key}' in size!`);
  return null;
};

export const weight = (key: keyof typeof variables.weight): number | null => {
  if (variables.weight.hasOwnProperty(key)) {
    return variables.weight[key];
  }
  console.warn(`Unknown '${key}' in weight!`);
  return null;
};

export const Text = styled.p`
  font-size: ${(props) => size("medium")};
  font-weight: ${(props) => weight("bold")};
`;

export const breakpoints = {
  mobile: "480px",
  tablet: "768px",
};

export const mobileDown = (content: TemplateStringsArray | string): ReturnType<typeof css> => css`
  @media (max-width: ${breakpoints.mobile}) {
    ${content}
  }
`;

export const mobile = (content: TemplateStringsArray | string): ReturnType<typeof css> => css`
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${parseInt(breakpoints.tablet) - 1}px) {
    ${content}
  }
`;

export const ExampleComponent = styled.div`
  width: 100%;
  height: 200px;

  ${mobileDown`
    background-color: red;
  `}

  ${mobile`
    background-color: blue;
  `}
`;
