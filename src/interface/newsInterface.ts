interface dataItemInterface {
  id: number;
  name: string;
  age: number;
  sex: string;
}

interface initialInterface {
  name: string;
  dataList: dataItemInterface[];
}

interface actionInterface {
  type: string;
  data: initialInterface;
}
export {
  dataItemInterface,
  initialInterface,
  actionInterface,
};

