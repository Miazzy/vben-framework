// import { time } from 'console';
import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, requestParams } from '../_util';

const tableListData = {
  pager: {
    list: [
      {
        id: '1',
        powerName: '黑龙江肇源电站',
        certificateName: '调度证',
        certificateMajor: '地（市）调',
        minRequirement: '1',
        createdByName: '管理员',
        createdDate: '2022-01-01',
      },
      {
        id: '2',
        powerName: '安徽蚌埠',
        certificateName: '调度证',
        certificateMajor: '省调',
        minRequirement: '2',
        createdByName: '管理员1111',
        createdDate: '2022-11-01',
      },
      {
        id: '3',
        powerName: '广东湛江廉江电站',
        certificateName: '安全管理',
        certificateMajor: '安全员',
        minRequirement: '2',
        createdByName: '222管理员',
        createdDate: '2022-04-01',
      },
      {
        id: '4',
        powerName: '黑龙江绥化',
        certificateName: '安全管理',
        certificateMajor: '安全管理资格',
        minRequirement: '4',
        createdByName: '4444管理员',
        createdDate: '2022-01-11',
      },
      {
        id: '5',
        powerName: '湖北天门通力电站',
        certificateName: '安全管理',
        certificateMajor: '主要负责人',
        minRequirement: '1',
        createdByName: '管理4员',
        createdDate: '2022-01-21',
      },
    ],
  },
};

export default [
  {
    url: '/basic-api/table/getListData',
    timeout: 200,
    method: 'get',
    response: () => {
      return resultSuccess(tableListData);
    },
  },
  {
    url: '/basic-api/table/addListData',
    timeout: 1000,
    method: 'post',
    response: (request: requestParams) => {
      tableListData.pager.list.push(request.body);
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/table/editListData',
    timeout: 1000,
    method: 'post',
    response: (request: requestParams) => {
      const list: any[] = [];
      for (const item of tableListData.pager.list) {
        console.log('item', item);

        if (request.body.id === item.id) {
          list.push(request.body);
        } else {
          list.push(item);
        }
      }
      tableListData.pager.list = list;
      return resultSuccess({});
    },
  },
  {
    url: '/basic-api/table/delListData',
    timeout: 1000,
    method: 'post',
    response: (request: requestParams) => {
      const list: any[] = [];
      for (const item of tableListData.pager.list) {
        console.log('item', item);

        if (request.body.id === item.id) {
          console.log();
        } else {
          list.push(item);
        }
      }
      tableListData.pager.list = list;
      return resultSuccess({});
    },
  },
] as MockMethod[];
