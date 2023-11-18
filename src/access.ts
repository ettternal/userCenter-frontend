/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * 控制用户的访问权限
 * */

//一个语法塘，用嘴上的代码实现最多的功能
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {}; //initialState整个项目中每个页面都能使用的公共数据
  return {
    canAdmin: currentUser && currentUser.userRole === 1,//currentUser保存当前用户的信息
  };
}
