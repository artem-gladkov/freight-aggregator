import styled from 'styled-components';

export const RegularText = styled.span<{ $size?: string }>`
  font-size: ${({ theme, $size }) => $size || theme.fontSize.l};
  color: ${({ theme: { colors } }) => colors.gray[300]};
`;

export const SecondaryText = styled.span<{ $size?: string }>`
  font-size: ${({ theme, $size }) => $size || theme.fontSize.m};
  line-height: 22px;
  color: ${({ theme: { colors } }) => colors.gray[200]};
`;

export const StrongText = styled.span`
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.gray[300]};
`;

export const Title = styled.h2`
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.gray[300]};
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  margin: 0;
`;
