import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '/@/router/routes/basic';

import { mainOutRoutes } from './mainOut';
import { PageEnum } from '/@/enums/pageEnum';
import { t } from '/@/hooks/web/useI18n';

// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const baseModules = import.meta.glob('./modules/prodMonitoring/*.ts', { eager: true }); //  生产监视菜单配置导入
const settingModules = import.meta.glob('./modules/setting/*.ts', { eager: true }); //  系统设置菜单配置导入
const operationModules = import.meta.glob('./modules/operationManage/*.ts', { eager: true }); //  运维管理菜单配置导入
const reportModules = import.meta.glob('./modules/reportForms/*.ts', { eager: true }); //  BI报表菜单配置导入
const decisionAnalysisModules = import.meta.glob('./modules/decisionAnalysis/*.ts', { eager: true }); //  决策分析菜单配置导入
const intelliAnalysisModules = import.meta.glob('./modules/intelliAnalysis/*.ts', { eager: true }); //  智能分析菜单配置导入
const digitalTwinModules = import.meta.glob('./modules/digitalTwin/*.ts', { eager: true }); //  智能分析菜单配置导入

const routeModuleList: AppRouteModule[] = [];

// 生产监视加入到路由集合中
Object.keys(baseModules).forEach((key) => {
  const mod = (baseModules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// 系统设置加入到路由集合中
Object.keys(settingModules).forEach((key) => {
  const mod = (settingModules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// 运维管理加入到路由集合中
Object.keys(operationModules).forEach((key) => {
  const mod = (operationModules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// BI报表加入到路由集合中
Object.keys(reportModules).forEach((key) => {
  const mod = (reportModules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// 决策分析加入到路由集合中
Object.keys(decisionAnalysisModules).forEach((key) => {
  const mod = (decisionAnalysisModules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// 智能分析加入到路由集合中
Object.keys(intelliAnalysisModules).forEach((key) => {
  const mod = (intelliAnalysisModules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// 智能分析加入到路由集合中
Object.keys(digitalTwinModules).forEach((key) => {
  const mod = (digitalTwinModules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// TODO 

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/login/Login.vue'),
  meta: {
    title: t('routes.basic.login'),
  },
};

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [
  LoginRoute,
  RootRoute,
  ...mainOutRoutes,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
