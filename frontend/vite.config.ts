import { defineConfig, loadEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default ({ mode }: UserConfig) => {
  if (mode) {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  }

  return defineConfig({
    plugins: [react(), svgr()],
  });
};
