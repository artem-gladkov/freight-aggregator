import styled from 'styled-components';

export const RegularText = styled.span<{ $size?: string }>`
  font-size: ${(props) => props.$size || '18px'};
  color: ${({ theme: { colors } }) => colors.gray[300]};
`;

export const SecondaryText = styled.span<{ $size?: string }>`
  font-size: ${(props) => props.$size || '16px'};
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
  font-size: ${({ theme: { fontSize } }) => fontSize.big};
  margin: 0;
`;
