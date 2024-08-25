import { h } from 'vue';
// import { Router } from "vue-router";
import type { RouteRecordRaw } from 'vue-router';
import { PieChartOutlined } from '@/Icons/index'

const jsRouters: RouteRecordRaw[] = [
  {
    path: '/html',
    name: 'html',
    redirect: '/anchorPoint',
    meta: {
      title: 'CSS 相关',
      icon: () => h(PieChartOutlined),
    },
    component: () => import('@/views/css/index.vue'),
    children: [
      {
        path: '/flex/flexContent',
        name: 'flexContent',
        meta: {
          title: 'flex 自动分配',
          icon: () => h(PieChartOutlined),
        },
        component: () => import('@/views/css/flex/flexContent.vue'),
      }
    ]
  }
];

export default jsRouters;