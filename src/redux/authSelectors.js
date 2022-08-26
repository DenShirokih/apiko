const getId = state => state.auth.id;
const getloggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name

export const authSelectors = {
  getId,
  getloggedIn,
  getUserName
};
