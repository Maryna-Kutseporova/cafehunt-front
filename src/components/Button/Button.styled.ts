import styled, { css } from 'styled-components';
import { COLORS, FONT_WEIGHTS } from '../../theme';

type Props = {
  width?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

const primaryButtonStyles = css`
  background-color: ${COLORS.main};

  &:hover {
    background-color: ${COLORS.tertiary_color};
  }

  &:disabled {
    color: ${COLORS.dark_grey};
    background-color: ${COLORS.grey};
    cursor: not-allowed;
  }
`;

const secondaryButtonStyles = css`
  color: ${COLORS.main};
  border: 1px solid ${COLORS.main};
  background-color: transparent;

  &:hover {
    background-color: ${COLORS.secondary_color};
  }

  &:disabled {
    color: ${COLORS.grey};
    border: 1px solid ${COLORS.grey};
    background-color: none;
    cursor: not-allowed;
  }
`;

export const Button = styled.button<Props>`
  width: ${({ width }) => width || '100%'};
  padding: 12px 0;

  font-weight: ${FONT_WEIGHTS.medium};
  color: ${COLORS.white};

  border: 1px solid transparent;
  border-radius: 8px;

  transition: 0.3s background-color ease;

  cursor: pointer;

  ${({ variant }) => variant === 'secondary' && secondaryButtonStyles};

  ${({ variant }) =>
    (variant !== 'secondary' || !variant) && primaryButtonStyles};
`;
