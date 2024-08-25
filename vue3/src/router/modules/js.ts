import { h } from 'vue';
// import { Router } from "vue-router";
import type { RouteRecordRaw } from 'vue-router';
import { PieChartOutlined } from '@/Icons/index'

// : RouteRecordRaw[]
const jsRouters: RouteRecordRaw[] = [
  {
    path: '/js',
    name: 'js',
    redirect: '/evelStringCode',
    meta: {
      title: 'JS 题',
      icon: () => h(PieChartOutlined),
    },
    component: () => import('@/views/js/index.vue'),
    children: [
      {
        path: '/evelStringCode',
        name: 'evelStringCode',
        meta: {
          title: 'evelStringCode 题',
          icon: () => h(PieChartOutlined),
        },
        component: () => import('@/views/js/evelStringCode/index.vue'),
      },
      {
        path: '/virtuallyList',
        name: 'virtuallyList',
        meta: {
          title: '虚拟列表',
          icon: () => h(PieChartOutlined),
        },
        component: () => import('@/views/js/virtuallyList/index.vue'),
      },
      
    ]
  }
];

export default jsRouters;