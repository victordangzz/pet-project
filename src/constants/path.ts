const _NO_ROUTE = ''
export const NOT_FOUN_ROUTE = '*'
export const LOGIN_ROUTE_DEFAULT = '/login'
const buildPath = (verify: string | null) => ({
  LOGIN: LOGIN_ROUTE_DEFAULT,
  HOME: '/',
  USER: '/user',
  USER_CHANGE_PASSWORD: '/user/change-password',
  USER_DETAIL: verify === 'SuperAdmin' ? '/user/:userId' : _NO_ROUTE,
  USER_CREATE: verify === 'SuperAdmin' ? '/user/create' : _NO_ROUTE,
  USER_UPDATE: '/user/profile',
  BLOG_LIST: '/blogs',
  BLOG_CREATE: verify === 'Verified' ? '/blogs/create' : _NO_ROUTE,
  BLOG_UPDATE: verify === 'Verified' ? '/blogs/:blogId/update' : _NO_ROUTE,
  BLOG_DETAIL: '/blogs/:blogId',
  MY_BLOGS: verify === 'Verified' ? '/blogs/my-blogs' : _NO_ROUTE
})

export default buildPath
