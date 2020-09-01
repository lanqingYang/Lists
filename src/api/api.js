//把所有要用的接口，全部写到一个文件里面，封装成一个一个的函数，需要使用的时候直接调用函数即可
//逻辑清晰，接口改动时也能快速定位，维护成本降低

import axios from "axios";
export const requestLogin = params => {
  return axios.post(`/login`, params).then(res => res.data);
};

export const getTodoList = params => {
  //封装一个函数，名为getTodoList
  return axios.get(`/todo/list`, {
    //请求路径 '/todo/list'
    params: params
  });
};

export const getTodo = params => {
  return axios.get(`/todo/listId`, {
    params: params
  });
};

export const addRecord = params => {
  return axios.post(`/todo/addRecord`, params).then(res => res.data);
};

export const editTodo = params => {
  return axios.post(`/todo/editTodo`, params).then(res => res.data);
};
export const editRecord = params => {
  return axios.post(`/todo/editRecord`, params).then(res => res.data);
};

export const addTodo = params => {
  return axios.post(`/todo/addTodo`, params).then(res => res.data);
};

// export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

// export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };
