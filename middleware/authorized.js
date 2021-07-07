/* eslint-disable */
export default (context) => {
  const routeName = context.route.name
  if (
    routeName !== 'login' &&
    routeName !== 'dashboard' &&
    routeName !== 'profile'
  ) {
    const roleID = context.store.getters.loggedInRole
    // console.log(routeName, this.$GlobalConstant.PAGE_PERMISSION[roleID][routeName])
    if (!context.app.$GlobalConstant.PAGE_PERMISSION[roleID]) {
      return context.redirect('/dashboard')
    }
    if (!context.app.$GlobalConstant.PAGE_PERMISSION[roleID][routeName]) {
      return context.redirect('/dashboard')
    }
  }
}
