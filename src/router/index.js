import {role} from '../api/api';

import Login from '../views/Login.vue'
import NotFound from '../views/404.vue'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import User from '../views/nav1/userList.vue'
import Form from '../views/nav1/Form.vue'
import Page4 from '../views/nav2/Page4.vue'
import Page5 from '../views/nav2/Page5.vue'
import echarts from '../views/charts/echarts.vue'

let routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: '基础信息管理',
    iconCls: 'el-icon-message',//图标样式class
    children: [
      {path: '/main', component: Main, name: '主页', hidden: true},
      {path: '/user', component: User, name: '用户管理'},
      {path: '/bill', component: Form, name: '账单管理'},
      {path: '/supplier', component: Form, name: '供应商管理'},
    ]
  },
  {
    path: '/',
    component: Home,
    name: '系统管理',
    iconCls: 'fa fa-id-card-o',
    children: [
      {path: '/role', component: Page4, name: '权限管理'},
      {path: '/res', component: Page5, name: '菜单管理'}
    ]
  },
  {
    path: '/',
    component: Home,
    name: '工具',
    iconCls: 'fa fa-bar-chart',
    children: [
      {path: '/echarts', component: echarts, name: 'echarts'}
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: {path: '/404'}
  }
];

export default routes;
