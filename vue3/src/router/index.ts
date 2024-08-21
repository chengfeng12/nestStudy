import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined
} from '@/Icons/index'
import HomeView from '@/views/HomeView.vue'
import js from '@/router/modules/js'
import html from '@/router/modules/html'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页',
        icon: () => h(MailOutlined),
      },
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于我',
        icon: () => h(PieChartOutlined),
      },
      component: () => import('@/views/AboutView.vue')
    },
    ...html,
    ...js
  ]
})

export default router
