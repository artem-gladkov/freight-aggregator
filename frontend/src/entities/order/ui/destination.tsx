import { FC } from 'react';
import styled from 'styled-components';

export interface DestinationProps {
  city?: string;
  region?: string;
}

const City = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`;

const Region = styled.span`
  font-size: 16px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.gray[200]};
`;

const DestinationStyled = styled.div`
  min-width: max-content;
`;

export const Destination: FC<DestinationProps> = ({ city, region }) => {
  return (
    <DestinationStyled>
      <City>{city}</City>
      &nbsp;
      <Region>{region}</Region>
    </DestinationStyled>
  );
};
