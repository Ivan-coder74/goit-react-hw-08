export const selectUserName = (state)  => state.auth.user.name;
export const selectUserEmail = (state)  => state.auth.user.email;
export const selectToken = (state)  => state.auth.token;
export const selectIsLoggedIn = (state)  => state.auth.isLoggedIn;
export const selectIsRef = (state)  => state.auth.isRefreshing;
export const selectLoading = (state)  => state.auth.loading;
export const selectError = (state)  => state.auth.error