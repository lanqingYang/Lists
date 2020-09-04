import Mock from "mockjs"; // 导入mockjs 模块
let Todos = []; // 定义我们需要的数据
const COUNT = [1, 2, 3, 4, 5]; // 定义我们需要数量
for (let i = 1; i <= COUNT.length; i++) {
  Todos.push(
    Mock.mock({
      // 根据数据模板生成模拟数据。
      id: Mock.Random.guid(), // 随机id
      title: Mock.Random.first(), // 随机标题
      isDelete: false, // 是否删除
      locked: Mock.Random.boolean(), // 随机锁定
      //map()方法 《遗漏知识点》
      //每项生成5条详细内容
      record: COUNT.map(() => {
        // 代办单项列表的数据
        return {
          text: Mock.Random.cparagraph(2), // 随机内容
          //cparagraph可以看作是多条csentence以逗号连接后的字符串，默认条数为 3 到 7条csentence
          //通过Random.cparagraph(length )指定句子的个数
          isDelete: false, // 是否删除
          checked: Mock.Random.boolean() // 是否完成
        };
      })
    })
  );
}

//另一种写法  这样写 生成的是一个对象，上面的一种写法，生成的是Todos数组
// let Todos = Mock.mock({
//   //5条数组数据 名字|数量：类型
//   "Todos|5": [
//     {
//       // 根据数据模板生成模拟数据。
//       id: Mock.Random.guid(), // 随机id
//       title: Mock.Random.first(), // 随机标题
//       isDelete: false, // 是否删除
//       locked: Mock.Random.boolean(), // 随机锁定
//       "record|5": [
//         // 代办单项列表的数据
//         {
//           text: Mock.Random.cparagraph(2), // 随机内容
//           //cparagraph可以看作是多条csentence以逗号连接后的字符串，默认条数为 3 到 7条csentence
//           //通过Random.cparagraph(length )指定句子的个数
//           isDelete: false, // 是否删除
//           checked: Mock.Random.boolean() // 是否完成
//         }
//       ]
//     }
//   ]
// });
export {
  // 导出列表数据
  Todos
};
