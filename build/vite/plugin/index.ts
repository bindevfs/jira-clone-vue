// eslint-disable-next-line import/no-extraneous-dependencies
import { PluginOption } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import vue from '@vitejs/plugin-vue';

// viteEnv: ViteEnv, isBuild: boolean
export function createVitePlugins () {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
  ];

  return vitePlugins;
}
