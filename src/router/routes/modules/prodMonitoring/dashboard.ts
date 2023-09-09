import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

// 生产监视菜单配置位置
const dashboard: AppRouteModule = {
  path: '/prodmonitoring',
  name: 'prodmonitoring',
  component: LAYOUT,
  redirect: '/prodmonitoring/analysis',
  meta: {
    orderNo: 0,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/prodMonitoring/analysis/index.vue'),
      meta: {
        title: t('routes.dashboard.analysis'),
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/prodMonitoring/workbench/index.vue'),
      meta: {
        title: t('routes.dashboard.workbench'),
      },
    },
    {
      path: 'pvAnalysis',
      name: 'PvAnalysis',
      component: LAYOUT,
      meta: {
        title: t('routes.dashboard.pvAnalysis'),
      },
      children: [
        {
          path: 'boosterStationMonitoring',
          name: 'boosterStationMonitoring',
          component: () => import('/@/views/prodMonitoring/analysis/index.vue'),
          meta: {
            title: t('routes.dashboard.boosterStationMonitoring'),
          },
        },
        {
          path: 'energyStorageMonitoring',
          name: 'energyStorageMonitoring',
          component: () => import('/@/views/prodMonitoring/workbench/index.vue'),
          meta: {
            title: t('routes.dashboard.energyStorageMonitoring'),
          },
        },
        {
          path: 'faultAlarm',
          name: 'faultAlarm',
          component: () => import('/@/views/prodMonitoring/workbench/index.vue'),
          meta: {
            title: t('routes.dashboard.faultAlarm'),
          },
        },
      ],
    },
    {
      path: 'realTimeAnalysis',
      name: 'RealTimeAnalysis',
      component: () => import('/@/views/prodMonitoring/workbench/index.vue'),
      meta: {
        title: t('routes.dashboard.realTimeAnalysis'),
      },
    },
  ],
};

export default dashboard;
