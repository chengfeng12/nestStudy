import { h } from 'vue';
// import { Router } from "vue-router";
import type { RouteRecordRaw } from 'vue-router';
import { PieChartOutlined } from '@/Icons/index'

// : RouteRecordRaw[]
const jsRouters: RouteRecordRaw[] = [
  {
    path: '/html',
    name: 'html',
    redirect: '/anchorPoint',
    meta: {
      title: 'HTML 相关',
      icon: () => h(PieChartOutlined),
    },
    component: () => import('@/views/html/index.vue'),
    children: [
      {
        path: '/anchorPoint',
        name: 'anchorPoint',
        meta: {
          title: '目录锚点',
          icon: () => h(PieChartOutlined),
        },
        component: () => import('@/views/html/anchorPoint/index.vue'),
      }
    ]
  }
];

export default jsRouters;