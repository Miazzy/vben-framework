import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

// 运维管理菜单配置位置
const analysis: AppRouteModule = {
  path: '/intelli',
  name: 'intelli',
  component: LAYOUT,
  redirect: '/intelli/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.intelli.analysis'),
  },
  children: [
    {
      path: 'analysis',
      name: 'analysis',
      component: () => import('/@/views/intelliAnalysis/analysis.vue'),
      meta: {
        title: t('routes.intelli.analysis'),
      },
    },
  ],
};

export default analysis;
