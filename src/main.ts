import { createApp } from 'vue';
import { setupRouter } from '@/router';
import App from './App.vue';

export function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  app.mount('#app');
}
bootstrap();
