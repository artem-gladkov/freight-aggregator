import { FC, ReactNode } from 'react';
import { antdTheme, theme } from './assets/styles/theme.ts';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from './assets/styles/global';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import locale from 'antd/locale/ru_RU';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages';
import dayjs from 'dayjs';
import 'dayjs/locale/ru.js';

interface ProvidersProps {
  readonly children: ReactNode;
}

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

dayjs.locale('ru');

export const Providers: FC<ProvidersProps> = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ConfigProvider theme={antdTheme} locale={locale}>
          <RouterProvider router={router} />
        </ConfigProvider>
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);
