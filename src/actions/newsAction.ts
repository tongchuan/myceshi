import { initialInterface, dataItemInterface } from '../interface/newsInterface';

class NewsAction {
  getName() {
    return new Promise((resolve: Function, reject: Function) => {
      setTimeout(() => {
        try {
          const data: initialInterface = {
            name: Math.random().toString(),
            dataList: []
          };
          for (let i = 0; i < 10; i += 1) {
            data.dataList.push({
              id: i + 1,
              name: 'name',
              age: i + 30,
              sex: i % 2 === 0 ? '男' : '女'
            } as dataItemInterface);
          }
          resolve(data);
        } catch (e) {
          reject(e);
        }
      }, 1000);
    });
  }
}

const news = new NewsAction();

export default news;