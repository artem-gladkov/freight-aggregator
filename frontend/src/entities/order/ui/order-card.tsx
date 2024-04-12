import { Card, Divider, Panel, RegularText, SecondaryText, Space, StrongText } from '../../../shared/ui';
import { FC, useMemo } from 'react';
import { Destination } from './destination.tsx';
import { Order } from '../types';
import styled from 'styled-components';
import { Flex } from 'antd';
import dayjs from 'dayjs';
import { formatNumber } from '../../../shared/libs';

export interface OrderCardProps {
  order: Order;
}

const OrderCardBody = styled(Panel)`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: minmax(max-content, 320px) max-content minmax(max-content, 1fr) max-content minmax(
      max-content,
      180px
    );
  width: 100%;
`;

const DividerStyled = styled(Divider)`
  height: 100%;
  margin: 0 16px;
`;

const PaymentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 180px;
`;

const MainPayment = styled.span`
  color: ${({ theme: { colors } }) => colors.gray[300]};
  font-size: 20px;
  font-weight: 600;
`;

const RouteInfo = styled(Space)`
  min-width: max-content;
  max-width: 320px;
  width: 100%;
`;

export const OrderCard: FC<OrderCardProps> = ({
  order: {
    orderNumber,
    destinations: { from, to },
    distance = '-',
    cargoInfo: { type, volume, weight },
    loadingDate,
    payment: { main, fuel },
  },
}) => {
  const formattedLoadingDate = useMemo(() => dayjs(loadingDate).format('DD MMMM YYYY HH:mm'), [loadingDate]);

  return (
    <Card>
      <OrderCardBody>
        <RouteInfo direction="vertical">
          <Destination {...from} />
          <Destination {...to} />
          <div>
            <SecondaryText>Расстояние:</SecondaryText>
            &nbsp;
            <StrongText>{distance} км</StrongText>
          </div>
        </RouteInfo>
        <DividerStyled type="vertical" />
        <Flex justify="space-between">
          <Flex vertical justify="space-between">
            <RegularText>{type}</RegularText>
            <SecondaryText as="div">{`${weight} / ${volume}`}</SecondaryText>
            <div>
              <SecondaryText>Погрузка:</SecondaryText>&nbsp;
              <span>{formattedLoadingDate}</span>
            </div>
          </Flex>
          <div>
            <SecondaryText $size="18px">№{orderNumber}</SecondaryText>
          </div>
        </Flex>
        <DividerStyled type="vertical" />
        <PaymentStyled>
          <MainPayment>{formatNumber(main)} ₽</MainPayment>
          <SecondaryText $size="14px">ГСМ:&nbsp;{formatNumber(fuel)} ₽</SecondaryText>
        </PaymentStyled>
      </OrderCardBody>
    </Card>
  );
};
