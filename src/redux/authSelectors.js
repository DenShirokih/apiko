const getId = state => state.auth.id;
const getloggedIn = state => state.auth.isLoggedIn;
export const authSelectors = {
  getId,
  getloggedIn,
};
