import { AppRouteModule } from '@/router/types';

const projects: AppRouteModule = {
  path: '/',
  name: 'Projects Board',
  component: () => import('@/layouts/default/index.vue'),
  redirect: '/projects',
  meta: {
    title: 'Projects',
  },
  children: [
    {
      path: '/projects',
      name: 'ProjectsPage',
      meta: {
        title: 'Projects Dashboard',
      },
      component: () => import('@/views/projects.vue'),
    },
  ],
};

export default projects;
