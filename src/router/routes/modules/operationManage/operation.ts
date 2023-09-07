import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

// 运维管理菜单配置位置
const dashboard: AppRouteModule = {
  path: '/operation',
  name: 'operation',
  component: LAYOUT,
  redirect: '/operation/manage',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.operation.manage'),
  },
  children: [
    {
      path: 'manage',
      name: 'manage',
      component: () => import('/@/views/operation/manage/index.vue'),
      meta: {
        title: t('routes.operation.manage'),
      },
    },
    {
      path: 'qualifi',
      name: 'qualifi',
      component: () => import('/@/views/operation/qualifi/index.vue'),
      meta: {
        title: t('routes.operation.qualifi'),
      },
    },
    {
      path: 'person',
      name: 'person',
      component: () => import('/@/views/operation/person/index.vue'),
      meta: {
        title: t('routes.operation.person'),
      },
      children: [
        {
          path: 'accountDtl',
          name: 'accountDtl',
          component: () => import('/@/views/operation/person/accountDetail.vue'),
          meta: {
            title: t('routes.operation.accountDetail'),
            hideMenu: true, // 如果不需要菜单在左侧菜单树显示出来，需要设置为"hideMenu:true"
          },
        },
      ],
    },
    {
      path: 'power',
      name: 'power',
      component: () => import('/@/views/operation/power/index.vue'),
      meta: {
        title: t('routes.operation.power'),
      },
    },
  ],
};

export default dashboard;
