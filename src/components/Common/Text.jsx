//@flow
/* eslint-disable */
import { space, width } from 'styled-system';

import React from 'react';
import styled from 'styled-components';
import Colors, { TmColors, Theme } from './Colors';
import { Fonts } from './Variables';

export const Text = styled.span`
  ${space}
  ${width}
  font-size: ${props =>
    props.xs
      ? Theme.FONT_SIZE_XS
      : props.sm
      ? Theme.FONT_SIZE_SM
      : props.lg
      ? Theme.FONT_SIZE_LG
      : Theme.FONT_SIZE_MD};
  color: ${props =>
    props.intent
      ? Colors[props.intent]
      : props.color
      ? props.color
      : props.muted
      ? Colors.TEXT_MUTED
      : Colors.TEXT};
  margin: ${props => props.margin || '10px'}
`;

export const SmallText = styled.span`
  ${space}
  ${width}
  font-size: ${Fonts.FONT_SIZE_SMALL}px !important;
  color: ${props =>
    props.intent
      ? Colors[props.intent]
      : props.muted
      ? TmColors.GRAY
      : Colors.TEXT};
`;
export const MediumText = styled.span`
  ${space}
  ${width}
  font-size: ${Fonts.FONT_SIZE_LARGE}px !important;
  color: ${props =>
    props.intent
      ? Colors[props.intent]
      : props.muted
      ? TmColors.GRAY
      : Colors.TEXT};
`;

export const SmallTextDiv = styled.div`
  ${space}
  ${width}
  font-size: ${Fonts.FONT_SIZE_SMALL}px !important;
  color: ${props =>
    props.intent
      ? Colors[props.intent]
      : props.muted
      ? Colors.TEXT_MUTED
      : Colors.TEXT};
`;

export const TextDiv = styled.div`
  ${space}
  ${width}
  font-size: ${props =>
    props.small
      ? Fonts.FONT_SIZE_SMALL
      : props.large
      ? Fonts.FONT_SIZE_LARGE
      : Fonts.FONT_SIZE}
  color: ${props =>
    props.intent
      ? Colors[props.intent]
      : props.color
      ? props.color
      : props.muted
      ? Colors.TEXT_MUTED
      : Colors.TEXT}
  margin: auto;
  )}
`;

export const LargeText = styled.h3`
  ${space}
  ${width}
  color: ${props =>
    props.intent
      ? Colors[props.intent]
      : props.color
      ? props.color
      : props.muted
      ? Colors.TEXT_MUTED
      : Colors.HEADING}
`;

export const Header = styled.h3`
  text-align: left;
  margin-bottom: auto;
  margin-top: auto;
`;

export const EmphasizedText = styled.span`
  ${space}
  ${width}
  font-size: ${props =>
    props.small
      ? Fonts.FONT_SIZE_SMALL
      : props.large
      ? Fonts.FONT_SIZE_LARGE
      : Fonts.FONT_SIZE}
  color: ${Colors.LINK};
`;

export const MutedText = styled.span`
  ${space}
  ${width}
  font-size: ${props =>
    props.small
      ? Fonts.FONT_SIZE_SMALL
      : props.large
      ? Fonts.FONT_SIZE_LARGE
      : Fonts.FONT_SIZE}
  color: ${TmColors.GRAY};
`;

export const LinkText = styled.div`
  ${space}
  ${width}
  font-size: ${props =>
    props.small
      ? Fonts.FONT_SIZE_SMALL
      : props.large
      ? Fonts.FONT_SIZE_LARGE
      : Fonts.FONT_SIZE}
  cursor: pointer;
  color: ${Colors.LINK};
`;

export const HeaderText = ({ text, helperText }: *) => {
  return (
    <React.Fragment>
      <Header>
        {text}
        <MutedText>{helperText}</MutedText>
      </Header>
    </React.Fragment>
  );
};

export const LabelText = ({ children, helperText }: *) => {
  return (
    <React.Fragment>
      {children}
      <MutedText> {helperText} </MutedText>
    </React.Fragment>
  );
};
