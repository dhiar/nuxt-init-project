/* eslint-disable */
export default (context) => {
  const isAuthenticated = context.store.getters.isAuthenticated
  // console.log('authenticated', context.route);
  if (context.route.name !== 'login') {
    if (!isAuthenticated) return context.redirect('/login')
  } else if (context.route.name !== 'profile' && isAuthenticated) {
    return context.redirect('/dashboard')
  }
}
