import React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

type Color = 'primary' | 'secondary' | 'warning' | 'danger' | 'default'
type Shade = 'light' | 'dark'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps {
  text: string
  color: Color
  shade?: Shade
  size: Size
  onClick?: () => void,
  disabled?: boolean,
  type?: string,
}

function generateBackground(color:Color, shade:Shade) {
  if (!shade) {
    return colors[color];
  } else {
    return shade === 'light' ? colors[color + '400'] : colors[color + '700'];
  }
}
function generateActiveBackground(color:Color, shade:Shade) {
  if (!shade) {
    return colors[color + '700'];
  } else if (shade === 'light') {
    return colors[color];
  } else {
    return generateBackground(color, shade); // same background color for dark shades
  }
}
function generateContrast(color:Color, shade:Shade) {
  if (shade === 'light' || color === 'default') {
    return colors.textLight;
  } else {
    return colors.background;
  }
}
function generateBorderColor(color:Color, shade:Shade) {
  if (shade === 'light') {
    return colors[color + '700'];
  } else {
    return colors.textLight;
  }
}
function calcFontFromSize(size:Size) {
  const fontSizes = {
    xs: '0.8rem',
    sm: '0.9rem',
    md: '1rem',
    lg: '1.1rem',
    xl: '1.2rem'
  }
  if (!size) {
    return fontSizes.md;
  } else {
    return fontSizes[size]
  }
}
function calcHeightFromSize(size:Size) {
  const supportedHeights = {
    xs: '1.2rem',
    sm: '1.8rem',
    md: '2.2rem',
    lg: '2.6rem',
    xl: '3rem'
  }
  if (!size) {
    return supportedHeights.md;
  } else {
    return supportedHeights[size];
  }
}
function calcPaddingFromSize(size:Size) {
  const btnPaddings = {
    xs: '2px 5px 2px 5px',
    sm: '3px 8px 5px 8px',
    md: '3px 8px 5px 8px',
    lg: '3px 12px 5px 12px',
    xl: '3px 15px 5px 15px'
  }
  if (!size) {
    return btnPaddings.md;
  } else {
    return btnPaddings[size];
  }
}
const StyledButton:React.FC<ButtonProps> = styled.button`
  background-color: ${(props:ButtonProps) => generateBackground(props.color, props.shade)};
  height: ${(props:ButtonProps) => calcHeightFromSize(props.size)};
  font-size: ${(props:ButtonProps) => calcFontFromSize(props.size)};
  color: ${(props:ButtonProps) => generateContrast(props.color, props.shade)};
  border-radius: 0.5rem;
  border-color: ${(props:ButtonProps) => generateBorderColor(props.color, props.shade)};
  cursor: pointer;
  padding: ${(props:ButtonProps) => calcPaddingFromSize(props.size)};
  box-shadow: 1px 1px 3px lightgray;
  transition: 0.2s;

  &:hover {
    box-shadow: 3px 3px 5px darkgray;
  }
  &:active {
    background-color: ${(props:ButtonProps) => generateActiveBackground(props.color, props.shade)};
    box-shadow: 2px 2px 4px gray;
    font-size: 0.95rem;
  }
  &:disabled {
    background-color: lightgray;
    color: gray;
  }
`

export default function PlainButton(props:ButtonProps) {
  const defaultClick = () => {
    console.warn('Unhandled button click');
  }
  return (
    <StyledButton {...props}
      onClick={props.onClick || defaultClick}
    >{props.text || 'Hello'}</StyledButton>
  );
}
