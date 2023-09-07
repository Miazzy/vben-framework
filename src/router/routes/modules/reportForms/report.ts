import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

// BI报表菜单配置位置
const reports: AppRouteModule = {
  path: '/reportforms',
  name: 'reportforms',
  component: LAYOUT,
  redirect: '/reportforms/report',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.reportforms.report'),
  },
  children: [
    {
      path: 'report',
      name: 'report',
      component: () => import('/@/views/reportforms/report/index.vue'),
      meta: {
        title: t('routes.reportforms.report'),
      },
    },
  ],
};

export default reports;
