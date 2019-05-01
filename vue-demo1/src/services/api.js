import {post} from '../util/Http'


export const getList =  (params) =>{
  return post("api/list",{
    method:"POST",
    data:params
  })
};
