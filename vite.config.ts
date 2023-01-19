import type { UserConfig, ConfigEnv } from 'vite';
import dayjs from 'dayjs';
import { loadEnv } from 'vite';
import { resolve } from 'path';
import pkg from './package.json';
import { wrapperEnv } from './build/utils';
import { createVitePlugins } from './build/vite/plugin';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

const {
  dependencies, devDependencies, name, version,
} = pkg;
// eslint-disable-next-line no-underscore-dangle
const __APP_INFO__ = {
  pkg: {
    dependencies, devDependencies, name, version,
  },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE, VITE_PORT } = viteEnv;

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: `${pathResolve('src')}/`,
        },
      ],
    },
    server: {
      https: false,
      host: true,
      port: VITE_PORT || 3000,
    },
    preview: {
      port: VITE_PORT || 3000,
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: 'dist',
      chunkSizeWarningLimit: 2000,
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    plugins: createVitePlugins(),
  };
};
