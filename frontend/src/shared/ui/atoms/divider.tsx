import { Divider as AntdDivider, DividerProps as AntdDividerProps } from 'antd';
import { FC } from 'react';

export interface DividerPops extends AntdDividerProps {}

export const Divider: FC<DividerPops> = ({ ...otherProps }) => {
  return <AntdDivider {...otherProps} />;
};
