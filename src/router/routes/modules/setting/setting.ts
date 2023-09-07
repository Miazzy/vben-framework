import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

// 系统设置菜单配置位置
const setting: AppRouteModule = {
  path: '/setting',
  name: 'Setting',
  component: LAYOUT,
  redirect: '/setting/setup',
  meta: {
    orderNo: 10000,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.setting'),
  },
  children: [
    {
      path: 'setup',
      name: 'Setup',
      component: () => import('/@/views/setting/index.vue'),
      meta: {
        title: t('routes.dashboard.setup'),
      },
    },
  ],
};

export default setting;
