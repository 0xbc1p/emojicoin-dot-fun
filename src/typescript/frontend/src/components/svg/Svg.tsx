import styled, { css, keyframes } from "styled-components";
import { space } from "styled-system";
import { rotate } from "./theme";
import { SvgProps } from "./types";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinStyle = css`
  animation: ${rotateAnimation} 2s linear infinite;
`;

const Svg = styled.svg<SvgProps>`
  align-self: center;
  fill: ${({ theme, color }) => color && theme.colors[color]};
  flex-shrink: 0;
  transition: all 0.3s ease;
  ${({ spin }) => spin && spinStyle}
  ${rotate}
  ${space}
`;

Svg.defaultProps = {
  spin: false,
  color: "white",
  width: "20px",
  xmlns: "http://www.w3.org/2000/svg",
};

export default Svg;