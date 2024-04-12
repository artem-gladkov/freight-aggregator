import styled from 'styled-components';

export const Panel = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 100%;
  display: flex;
`;
