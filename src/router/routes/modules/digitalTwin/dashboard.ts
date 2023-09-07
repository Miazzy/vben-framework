import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

// 运维管理菜单配置位置
const dashboard: AppRouteModule = {
  path: '/digitalTwin',
  name: 'digitalTwin',
  component: LAYOUT,
  redirect: '/digitalTwin/dashboard',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.digitalTwin.dashboard'),
  },
  children: [
    {
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('/@/views/digitalTwin/dashboard.vue'),
      meta: {
        title: t('routes.digitalTwin.dashboard'),
      },
    },
  ],
};

export default dashboard;
