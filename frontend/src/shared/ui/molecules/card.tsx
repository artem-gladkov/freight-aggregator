import { Card as AntdCard, CardProps as AntdCardProps } from 'antd';
import { FC } from 'react';

export interface CardProps extends AntdCardProps {}

export const Card: FC<CardProps> = ({ children, ...otherProps }) => {
  return <AntdCard {...otherProps}>{children}</AntdCard>;
};
