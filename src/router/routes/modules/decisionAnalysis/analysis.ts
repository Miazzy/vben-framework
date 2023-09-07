import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

// 运维管理菜单配置位置
const decision: AppRouteModule = {
  path: '/decision',
  name: 'decision',
  component: LAYOUT,
  redirect: '/decision/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.decision.analysis'),
  },
  children: [
    {
      path: 'analysis',
      name: 'analysis',
      component: () => import('/@/views/decisionAnalysis/analysis.vue'),
      meta: {
        title: t('routes.decision.analysis'),
      },
    },
  ],
};

export default decision;
